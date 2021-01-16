<template>
  <div id="detail">
    <v-app-bar
        app
        height="44px"
        flat
    >
      <span></span>
      <v-tabs
          v-model="tab"
          next-icon="mdi-arrow-up"
          prev-icon="mdi-arrow-up"
          slider-size="0"
          color="pink lighten-3">
        <v-tab v-for="(item,index) in tabs" :key="index">{{ item }}</v-tab></v-tabs>
      <span></span>
    </v-app-bar>

    Detail{{ this.$route.query }}
  </div>
</template>

<script>
import {getDetail} from "@/network/database";

export default {
  name: "Detail",
  data(){
    return{
      tab:null,
      tabs:['商品', '参数', '评论', '推荐'],
      infos:[]
    }
  },
  created() {
    this.getDetail()
  },
  methods:{
    getDetail(){
      getDetail(this.$route.query.iid).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>