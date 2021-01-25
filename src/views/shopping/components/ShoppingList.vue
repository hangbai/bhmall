<template>
  <div class="shopping-item">
    <div>
      <div class="item" v-for="(item,index) in itemInCart" :key="index">
        <div class="item-check" :class="{active:item.status}" @click="checkSelect(index)">
          <img src="@/assets/img/cart/tick.svg">
        </div>
        <div class="item-image"><img :src="item.imgURL" alt=""></div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-dec">商品描述:{{ item.desc }}</div>
          <div class="item-buy">
            <div class="price">¥{{ item.newPrice }}</div>
            <div class="count">{{ item.amount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      itemInCart: [],
      itemStatus:[],
    }
  },
  methods: {
    checkSelect(index) {
      this.itemStatus[index] = !this.itemStatus[index]
      this.$store.state.itemInCart[index].status = !this.$store.state.itemInCart[index].status
      console.log('itemStatus',index,this.itemStatus[index])
      console.log('state',index,this.$store.state.itemInCart[index].status);
      console.log('itemInCart',this.$store.state.itemInCart);
      console.log('itemStatus',this.$store.state.itemStatus);
      this.$forceUpdate() //强制刷新
    }
  },
  mounted() {
    this.itemInCart = this.$store.state.itemInCart
    this.itemStatus = this.$store.state.itemStatus
    console.log('shopping mounted');
  },
  updated(){
    this.itemInCart = this.$store.state.itemInCart
    this.itemStatus = this.$store.state.itemStatus
    console.log('shopping updated');
  }
}
</script>

<style scoped>
.item-check {
  line-height: 110px;
  margin: 5px;
  min-width: 20px;
}

.item-check img {
  vertical-align: middle;
  border-radius: 50%;
  background-color: white;
  border: 2px solid rgb(204, 204, 204);
}

.active img {
  background-color: rgb(244, 143, 177);
  border: 2px solid rgb(244, 143, 177);
}

.count {
  position: absolute;
  right: 0;
}

.price {
  color: rgb(244, 143, 177);
}

.item-buy {
  font-size: 18px;
  padding-top: 20px;
  position: relative;
  display: flex;
}

.item-dec {
  font-size: 14px;
  padding-top: 10px;
  color: rgb(111, 111, 111);
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}

.item-info {

  padding-top: 6px;
  margin-left: 15px;
  margin-right: 15px;
  white-space: nowrap;
  overflow: hidden;

}

.item-image {
  width: 80px;
  padding: 10px 0px;
}

.item-image img {
  height: 100%;
  width: 80px;
  border-radius: 5px;
}

.item {
  display: flex;
  height: 121px;
  overflow: auto;
  border-bottom: 1px solid rgb(204, 204, 204);
}
</style>