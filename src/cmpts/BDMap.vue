<template>
    <div class="mapPage">
        <div>
            <el-form :inline="true">
                <el-form-item label="选择地区" prop="aidiId">
                    <el-select placeholder="请选择" v-model="aidi" style="width:150px" @change="change">
                        <el-option v-for="item in aidiData" :key="item.aidiId" :label="item.aidiNm" :value="item.aidiId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="经度" prop="aidiId">
                    <el-input :value="lng" auto-complete="off" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="纬度" prop="aidiId">
                    <el-input :value="lat" auto-complete="off" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div id="map" style="width:510px;height:300px"></div>
    </div>
</template>

<script>
import {AIDI_DATA} from "@/const/const.js";
export default {
  data() {
    return {
      aidi: "",
      lng: 0,
      lat: 0,
      aidiData: [],
      bdMap: null
    };
  },
  methods: {
    change() {
      this.bdMap.clearOverlays();
      this.bdMap.centerAndZoom(this.aidi, 15);
    },
    getData() {
      return { aidi: this.aidi, lng: this.lng, lat: this.lat };
    }
  },
  mounted() {
    const page = this;
    let map = new BMap.Map("map"); // 创建地图实例
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    if (this.aidiData.length > 0)
      map.centerAndZoom(this.aidiData[0].aidiNm, 15);
    else map.centerAndZoom("北京", 15);
    //不显示路网
    map.setMapStyle({
      styleJson: [
        {
          featureType: "road",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        }
      ]
    });
    //单击获取点击的经纬度
    map.addEventListener("click", function(e) {
      map.clearOverlays();
      var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)); // 创建点
      map.addOverlay(marker);
      page.lng = e.point.lng;
      page.lat = e.point.lat;
    });
    this.bdMap = map;
  },
  created() {
    this.aidiData = JSON.parse(localStorage.getItem(AIDI_DATA));
  },
  components: {}
};
</script>

<style lang="less">
.mapPage {
  width: 510px;
  height: 380px;
  text-align: center;
  .el-form-item {
    margin-right: 5px;
    margin-bottom: 10px;
  }
  .el-input {
    width: 90px;
    height: 30px;
    .el-input__inner {
      height: 30px;
      width: 90px;
      padding: 0 5px;
    }
    .el-input__icon {
      line-height: 1;
    }
  }
  .el-select {
    .el-input {
      width: 150px;
      height: 30px;
      .el-input__inner {
        height: 30px;
        width: 150px;
      }
    }
  }
}
</style>
