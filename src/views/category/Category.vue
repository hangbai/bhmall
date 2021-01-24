<template>
  <div id="category">
    <v-app-bar
        app
        color='pink lighten-3'
        height="44px"
        flat
        class="top-bar"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>商品分类</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <div class="category-main">
        <div class="left">
          <div v-for="(item,index) in categoryList" :key="index">
            <div class="tab-item" :class='{active:currentIndex===index}' @click="tabClick(index,item.maitKey,item.miniWallkey)">{{ item.title }}</div>
          </div>
        </div>
        <div class="right">
          <category-more :categoryData="categoryData"></category-more>
          <v-tabs v-model="tab" height="40px" fixed-tabs color="pink lighten-3" class='Pop-Over' ref="tabPos">
            <v-tab v-for="item in tabs" :key="item.tab">{{ item.tab }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in tabs" :key="item.tab">
              <category-detail :detail="categoryDetails[item.type]"/>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
import CategoryMore from "@/views/category/components/CategoryMore";
import CategoryDetail from "@/views/category/components/CategoryDetail";
import {getCategory,getMaitKey,getMiniWallkey} from "@/network/database";

export default {
  name: "Category",
  components:{
    CategoryMore,
    CategoryDetail
  },
  data() {
    return {
      tab:null,
      categoryList:[],
      currentIndex: 0,
      tabs: [{tab: '流行', type: 'pop'}, {tab: '新款', type: 'new'}, {tab: '精选', type: 'sell'}],
      categoryData:[],
      categoryDetails:{'pop':[],'sell':[],'new':[],},
      currentMiniWallkey:'10062603'
    }
  },
  methods: {
    tabClick(index,maitKey,miniWallkey) {
      this.currentIndex = index
      this.currentMiniWallkey=miniWallkey
      this.getMaitKey(maitKey)
      this.tab=0
      this.getMiniWallkey(miniWallkey,'pop')
      this.getMiniWallkey(miniWallkey,'sell')
      this.getMiniWallkey(miniWallkey,'new')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
      });
    },
    getCategory(){
      getCategory().then(res=>{
        this.categoryList = res.data.category.list
      })
    },
    getMaitKey(maitKey){
      getMaitKey(maitKey).then(res=>{
        this.categoryData = res.data.list
        console.log(res)
      })
    },
    getMiniWallkey(miniWallkey,type){
      getMiniWallkey(miniWallkey,type).then(res=>{
        this.categoryDetails[type] = res
        console.log(this.categoryDetails)
      })
    },
  },
  created() {
    this.getCategory()
    this.getMaitKey(3627)
    this.getMiniWallkey(10062603,'pop')
    this.getMiniWallkey(10062603,'sell')
    this.getMiniWallkey(10062603,'new')
  }
}
</script>

<style scoped>
.active {
  background-color: white;
  border-left: 2px solid rgb(244, 143, 177);
  color: rgb(244, 143, 177);
  font-weight: bold;
}

.tab-item {
  text-align: center;
  line-height: 45px;
  height: 45px;
  font-size: 14px;
}

.left {
  position: fixed;
  width: 100px;
  background-color: rgb(246, 246, 246);
  overflow: auto;
  height: calc(100vh - 93px);
}

.left::-webkit-scrollbar {
  display: none;
}

.right {
  width: calc(100% - 100px);
  position: absolute;
  right: 0;
  padding-bottom: 49px;
}

.category-main{
  display: flex;
  position: relative;
}

.v-toolbar__title {
  color: white;
  font-size: 16px !important;
}

.v-tab--active:before {
  background-color: white;
}
</style>