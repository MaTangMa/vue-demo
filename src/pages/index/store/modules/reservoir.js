const state = {
  reservoir: []
}

const actions = {
  updateReservoir: ({commit}, param) => {
    commit('sertReservoir', {items: param})
  }
}

const mutations = {
  sertReservoir: (state, {items}) => {
    state.reservoir = items
  }
}

const getters = {
  getReservoir: state => state.reservoir
}

export default {
  state,
  actions,
  mutations,
  getters
}