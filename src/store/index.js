import Vue from 'vue'
import Vuex from 'vuex'

// モジュールシステムで使用するための記述
Vue.use(Vuex)

const state = {
  modal_name: '',
  isShow:false,
  normal_count:0,
  noodle_count:0,
  bacon_cheese_count:0,
  tuna_corn_mayo_count:0,
  noodle_tuna_corn_mayo_count:0,
  noodle_tuna_corn_mayo_ketya_count:0,
  zenzai_count:0
}

const mutations = {
  setModal(state,payload){
    state.modal_name = payload
  },
  hideModal(state){
    state.modal_name = ''
  },
  show(state){
    state.isShow = true
  },
  hide(state){
    state.isShow = false
  },
  setNormalCount(state,payload){
    state.normal_count = payload.normal_count
  },
  setNoodleCount(state,payload){
    state.noodle_count = payload.noodle_count
  },
  setBaconCheeseCount(state,payload){
    state.bacon_cheese_count = payload.bacon_cheese_count
  },
  setTunaCornMayoCount(state,payload){
    state.tuna_corn_mayo_count = payload.tuna_corn_mayo_count
  },
  setNoodleTunaCornMayoCount(state,payload){
    state.noodle_tuna_corn_mayo_count = payload.noodle_tuna_corn_mayo_count
  },
  setNoodleTunaCornMayoKetyaCount(state,payload){
    state.noodle_tuna_corn_mayo_ketya_count = payload.noodle_tuna_corn_mayo_ketya_count
  },
  setZenzaiCount(state,payload){
    state.zenzai_count = payload.zenzai_count
  }
}

const actions = {
  showModalNormal ({ commit }){
    commit('setModal','ModalNormal')
  },
  showModalNoodle ({ commit }){
    commit('setModal','ModalNoodle')
  },
  showModalBaconCheese({ commit }){
    commit('setModal','ModalBaconCheese')
  },
  showModalTunaCornMayo({ commit }){
    commit('setModal','ModalTunaCornMayo')
  },
  showModalNoodleTunaCornMayo({ commit }){
    commit('setModal','ModalNoodleTunaCornMayo')
  },
  showModalNoodleTunaCornMayoKetya({ commit }){
    commit('setModal','ModalNoodleTunaCornMayoKetya')
  },
  showModalZenzai({ commit }){
    commit('setModal','ModalZenzai')
  },
  showModalFinalOrder({ commit }){
    commit('setModal','ModalFinalOrder')
  },
  updateNormalCount({ commit },payload){
    commit('setNormalCount',payload)
  },
  updateNoodleCount({ commit },payload){
    commit('setNoodleCount',payload)
  },
  updateBaconCheeseCount({ commit },payload){
    commit('setBaconCheeseCount',payload)
  },
  updateTunaCornMayoCount({ commit },payload){
    commit('setTunaCornMayoCount',payload)
  },
  updateNoodleTunaCornMayoCount({ commit },payload){
    commit('setNoodleTunaCornMayoCount',payload)
  },
  updateNoodleTunaCornMayoKetyaCount({ commit },payload){
    commit('setNoodleTunaCornMayoKetyaCount',payload)
  },
  updateZenzaiCount({ commit },payload){
    commit('setZenzaiCount',payload)
  }
}

const store = new Vuex.Store({
  state:state,
  mutations:mutations,
  actions:actions,
  namespaced: true
})

export default store
