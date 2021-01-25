<template>
  <div>
    <v-bottom-navigation>
      <div class="left">
        <div class="left-sub">
          <div class="customer icon"></div>
          <span>客服</span></div>
        <div class="left-sub">
          <div class="shop icon"></div>
          <span>店铺</span></div>
        <div class="left-sub">
          <div class="fav icon"></div>
          <span>收藏</span></div>
      </div>
      <div class="right">
        <div class="right-sub shopping" @click="addCart"><span>加入购物车</span></div>
        <div class="right-sub buy" @click="goShopping"><span>购买</span></div>
      </div>
    </v-bottom-navigation>
    <v-snackbar
        :timeout="1000"
        :value="isInChat"
        color="#FF669C"
        outlined
        text
        centered
    >
      已添加到购物车
    </v-snackbar>
    <v-snackbar
        :timeout="1000"
        :value="isMore"
        color="#FF669C"
        outlined
        text
        centered
    >
      商品数量加1
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  data(){
    return{
      isInChat:false,
      isMore:false
    }
  },
  props: {
    itemToCart: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addCart() {
      console.log(this.itemToCart);
      let itemList = this.$store.state.itemList
      let index = itemList.indexOf(this.itemToCart.iid)
      if (index === -1 && this.itemToCart.iid) {
        this.$store.state.itemList.push(this.itemToCart.iid)
        this.$store.state.itemInCart.push(this.itemToCart)
        this.$store.state.itemStatus.push(this.itemToCart.status)
        console.log(this.itemToCart.status);
        this.isInChat = true
        console.log('不存在')
      } else {
        if (this.itemToCart.iid) {
          this.$store.state.itemInCart[index].amount += 1
          this.isMore = true
          console.log('存在')
          setTimeout(()=>{
            this.isMore=false
          },1000)
        } else console.log('加载失败')
      }
      console.log('addCart', this.$store.state.itemInCart ,this.$store.state.itemList,this.$store.state.itemStatus)
    },
    goShopping() {
      this.$router.push('/shopping')
    }
  }
}
</script>

<style scoped>

.v-snack__content{
  text-align: center!important;
}

.shopping {
  background-color: rgb(255, 232, 23);
}

.buy {
  background-color: rgb(255, 102, 153);
  color: white;
}

.customer {
  background-position: 0px -52px;
}

.shop {
  background-position: 0px -98px;
}

.icon {
  margin: 10px auto 3px;
  height: 22px;
  width: 22px;
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-size: 100%;
}

.right-sub {
  text-align: center;
  line-height: 59px;
  width: 50%;
  font-size: 15px;

}

.left-sub {
  justify-content: center;
  text-align: center;
  width: 33%;
  font-size: 13px;
  color: rgb(102, 102, 102);
}


.left {
  justify-content: space-between;
  width: 50%;
  display: flex;
}

.right {
  justify-content: space-between;
  width: 50%;
  display: flex;
}

.v-bottom-navigation {
  z-index: 5;
  position: fixed;
  height: 59px !important;

}
</style>