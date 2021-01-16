<template>
  <v-bottom-navigation
      height="49px"
      :value="0"
      color="pink lighten-3"
      grow
      app>
    <v-btn v-for="(item,index) in items" :key="index" @click="btmClick(item.path)">
      <span>{{ item.name }}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data(){
    return{
      items:[
        {name:'主页',path:'/',icon:'mdi-home'},
        {name:'分类',path:'/category',icon:'mdi-border-all'},
        {name:'购物车',path:'/shopping',icon:'mdi-cart'},
        {name:'我的',path:'/profile',icon:'mdi-account'},
      ]
    }
  },
  methods:{
    btmClick(path){
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #f6f6f6;
}

.v-btn:before{
  background-color: #f6f6f6;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 49px;
}

.v-item-group.v-bottom-navigation .v-btn{
  max-width: 400px;
}
</style>