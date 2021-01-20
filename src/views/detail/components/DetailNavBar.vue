<template>
  <v-app-bar
      app
      height="44px"
      flat
      color="white"
      class="nav-bar"
  >
    <v-btn class="tab-bottom" depressed color="white" tile @click="back">
      <img src="@/assets/img/common/back.svg">
    </v-btn>
    <v-tabs
        v-model="tabIndex"
        grow
        slider-size="0"
        color="pink lighten-3"
    >
      <v-tab v-for="(item,index) in tabs" :key="index" @click="onScroll(index)">
<!--        <a href="#detail-rate">{{ item }}</a>-->
        {{ item }}
      </v-tab>
    </v-tabs>
    <div class="tab-bottom">
      <v-spacer></v-spacer>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "DetailNavBar",
  // props:{
  //   navChange:{
  //     type:Object,
  //     default(){
  //       return {}
  //     }
  //   }
  // },
  data() {
    return {
      tabs: ['商品', '参数', '评论', '推荐'],
      tabsNumber:{0:'detail-carousel',1:'detail-params',2:'detail-rate',3:'detail-recommend'},
      infos: [],
      tabIndex:0,
    }
  },
  methods:{
    back(){
      this.$router.push('/')
    },
    onScroll(num){
      this.tabIndex = num
      // let pos = this.navChange[this.tabsNumber[num]]
      // window.scrollTo({
      //   top: pos,
      //   left: 0,
      // })
      let tabChange = document.getElementById(this.tabsNumber[num]);
      tabChange.scrollIntoView();
    }
  }
}
</script>

<style scoped>
.tab-bottom {
  background-color: #5ea732;
  min-width: 48px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0px;
  min-width: 68px;
  margin-left: -20px;
}

.v-tab {
  min-width: 0px;
  font-size: 14px;
  padding: 0px;
}

.v-tab:before {
  background-color: white;
}

.nav-bar {
  z-index: 8;
}
</style>