<template>
  <v-bottom-navigation
      height="49px"
      :value="value"
      color="pink lighten-3"
      grow
      app>
    <v-btn>
      <span>主页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn>
      <span>分类</span>
      <v-icon>mdi-border-all</v-icon>
    </v-btn>
    <v-btn>
      <span>购物车</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn>
      <span>我的</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data: () => ({ value: 0 }),
  computed: {
  },
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
</style>