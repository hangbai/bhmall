import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemInCart:[],
    itemList:[],
  },
  getters:{
    itemCount(state){
      return state.itemInCart.length
    },
    itemInCart(state){
      return state.itemInCart
    },
  },
  mutations: {
    changeSelect(state,payload){
      state.itemInCart[payload.index].status = !state.itemInCart[payload.index].status
      console.log('changeSelect');
    }
  }
})

export default store