/**
 * pdf预览组件
 * 只提供预览功能
 * props: 
 * 1. type: 'single'|'all'
 * single：为单页模式，提供翻页功能
 * all: 为全部模式，会初始化全部pdf页
 * 2. filePath：String
 * pdf文件路径，无法跨域（需代理）
 * 修改此值会重新初始化
 */
<template>
<div class="pdf-scan">
  <div class="page-content">
    <div  v-if="type === 'all'">
      <div class="pdf-wrapper" v-for="num in pageLength" :key="num">
        <canvas ref="pdfs" width="595" height="841"></canvas>
      </div>
    </div>
    <div class="pdf-wrapper" v-else key="single">
      <canvas ref="pdfs" width="595" height="841"></canvas>
    </div>
  </div>
  <span class="pdf-toggle">
    <el-button @click="onPrevPage" v-if="type === 'single'">上一页</el-button>
    <span class="pdf-pagenum" v-if="pdfDoc && type === 'single'">
      <span>{{pageNum}}/</span>
      <span>{{pdfDoc.numPages}}页</span>
    </span>
    <span class="pdf-pagenum" v-if="pdfDoc && type === 'all'">
      <span>共{{pdfDoc.numPages}}页</span>
    </span>
    <el-button @click="onNextPage" v-if="type === 'single'">下一页</el-button>
  </span>
</div>
</template>

<script>
import PDFJS from 'pdfjs-dist' // ie9使用1.x.x版本

export default {
  props: {
    filePath: {
      default: ''
    },
    type: {
      default: 'single'
    }
  },
  data () {
    return {
      pageNum: 1,
      pdfDoc: null,
      pageRendering: false,
      pageNumPending: null,
      scale: 1,
      canvasList: [],
      ctxList: [],
      pageLength: 1
    }
  },
  watch: {
    filePath () {
      this.loadPdf()
    }
  },
  methods: {
    loadPdf () {
      if (!this.filePath) {
        return
      }
      this.pageNum = 1
    /**
     * Asynchronously downloads PDF.
     */
      PDFJS.getDocument(this.filePath).then((pdfDoc_) => {
        this.pdfDoc = pdfDoc_
        let pageLength = this.pageLength = pdfDoc_.numPages
        let canvasList = []
        let ctxList = []
        this.$nextTick(() => {
          if (this.type === 'all') {
            for (let num = 0; num < pageLength; num++) {
              canvasList.push(this.$refs.pdfs[num])
              ctxList.push(canvasList[num].getContext('2d'))
            }
          } else if (this.type === 'single') {
            canvasList.push(this.$refs.pdfs)
            ctxList.push(canvasList[0].getContext('2d'))
          }
          this.canvasList = canvasList
          this.ctxList = ctxList
          if (this.type === 'all') {
            this.renderAll()
          } else if (this.type === 'single') {
            // Initial/first page rendering
            this.renderPage(this.pageNum, 0)
          }
        })
      })
    },
    renderAll () {
      let pageLength = this.pageLength
      for (let num = 0; num < pageLength; num++) {
        this.renderPage(num + 1, num)
      }
    },
        /**
     * Get page info from document, resize this.canvasList accordingly, and render page.
     * @param num Page number.
     */
    renderPage (num, index) {
      this.pageRendering = true
      // Using promise to fetch the page
      this.pdfDoc.getPage(num).then((page) => {
        var viewport = page.getViewport(this.scale)
        var width = page.view[2] * this.scale
        var height = page.view[3] * this.scale
        this.canvasList[index].width = width
        this.canvasList[index].height = height
        // Render PDF page into this.canvasList context
        var renderContext = {
          canvasContext: this.ctxList[index],
          viewport: viewport
        }
        var renderTask = page.render(renderContext)
        // Wait for rendering to finish
        renderTask.promise.then(() => {
          this.pageRendering = false
          if (this.pageNumPending !== null) {
                  // New page rendering is pending
            this.renderPage(this.pageNumPending)
            this.pageNumPending = null
          }
        })
      })
    },
    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    queueRenderPage (num) {
      if (this.pageRendering) {
        this.pageNumPending = num
      } else {
        this.renderPage(num, 0)
      }
    },
    /**
     * Displays next page.
    */
    onNextPage () {
      if (this.pageNum >= this.pdfDoc.numPages) {
        return
      }
      this.pageNum++
      this.queueRenderPage(this.pageNum)
    },
        /**
     * Displays previous page.
     */
    onPrevPage () {
      if (this.pageNum <= 1) {
        return
      }
      this.pageNum--
      this.queueRenderPage(this.pageNum)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadPdf()
    })
  }
}
</script>

<style lang="less">
.pdf-scan {
  position: relative;
  width: 100%;
  height: 100%;
  .page-content {
    top: 0;
  }
}
.pdf-wrapper {
  background-color: #fff;
  padding: 50px 0;
  text-align: center;
  canvas {
    border: 1px solid black;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .6);
  }
}
.pdf-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: auto 20px auto 0;
  height: 50px;
  line-height: 40px;
  .pdf-pagenum {
    color: black;
  }
}
.pdf-function {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 40px;
  margin: auto 30px;
}
</style>
