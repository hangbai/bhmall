<template>
  <v-bottom-navigation >
    <div class="left">
      <div class="left-sub"><div class="customer icon"></div><span>客服</span></div>
      <div class="left-sub"><div class="shop icon"></div><span>店铺</span></div>
      <div class="left-sub"><div class="fav icon"></div><span>收藏</span></div>
    </div>
    <div class="right">
      <div class="right-sub shopping"><span>加入购物车</span></div>
      <div class="right-sub buy"><span>购买</span></div>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
name: "DetailBottom"
}
</script>

<style scoped>
.shopping{
  background-color: rgb(255, 232, 23);
}
.buy{
  background-color: rgb(255, 102, 153);
  color: white;
}

.customer{
  background-position: 0px -52px;
}
.shop{
  background-position: 0px -98px;
}

.icon{
  margin: 10px auto 3px;
  height: 22px;
  width:22px;
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-size:100%;
}

.right-sub{
  text-align: center;
  line-height: 59px;
  width: 50%;
  font-size: 15px;

}

.left-sub{
  justify-content:center;
  text-align: center;
  width: 33%;
  font-size: 13px;
  color: rgb(102, 102, 102);
}



.left{
  justify-content: space-between;
  width: 50%;
  display: flex;
}
.right{
  justify-content: space-between;
  width: 50%;
  display: flex;
}

.v-bottom-navigation {
  z-index: 5;
  position: fixed;
  height: 59px!important;

}
</style>