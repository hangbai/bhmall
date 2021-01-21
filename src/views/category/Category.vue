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
          <div v-for="(item,index) in tabs" :key="index">
            <div class="tab-item" :class='{active:currentIndex===index}' @click="tabClick(index)">{{ item }}</div>
          </div>
        </div>
        <div class="right">
          <category-more :categoryData="categoryData"></category-more>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
import CategoryMore from "@/views/category/components/CategoryMore";
import {getCategory} from "@/network/database";

export default {
  name: "Category",
  components:{
    CategoryMore
  },
  data() {
    return {
      currentIndex: 0,
      tabs: ['正在流行', '上衣', '裤子', '裙子', '内衣', '女鞋', '男友', '包包', '运动', '配饰', '美妆', '个护', '家居', '百货', '母婴', '食品'],
      itemsIndex: {0: 3627,1:582,2:596,3:595,4:598,5:597,6:599,7:600,8:5253,9:609,10:594,11:830,12:602,13:606,14:603,15:605},
      listsIndex: {0: 10062603,1:50003,2:50005,3:50004,4:50006,5:50532,6:51716,7:50675,8:10056587,9:50797,10:50010,11:52378,12:10057031,13:10060232,14:20003089,15:52014},
      categoryData:[]
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.getCategory(this.itemsIndex[this.currentIndex])
      console.log(index, this.itemsIndex[this.currentIndex])
    },
    getCategory(key){
      getCategory(key).then(res=>{
        this.categoryData = res.data.list
        console.log(res)
      })
    }
  },
  created() {
    this.getCategory(3627)
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
</style>