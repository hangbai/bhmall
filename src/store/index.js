import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    itemInCart:[],
    itemStatus:[],
    itemList:[],
    
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeSelect(state,payload){
      state.itemInCart[payload.index].status = !state.itemInCart[payload.index].status
      console.log('changeSelect');
    }
  }
})

export default store