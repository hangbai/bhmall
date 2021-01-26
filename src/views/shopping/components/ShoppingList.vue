<template>
  <div class="shopping-item">
    <div>
      <div class="item" v-for="(item,index) in itemInCart" :key="index">
        <div class="item-check" :class="{active:itemStatus[index]}" @click="checkSelect(index)">
          <img src="@/assets/img/cart/tick.svg">
        </div>
        <div class="item-image"><img :src="item.imgURL" alt=""></div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-dec">商品描述:{{ item.des }}</div>
          <div class="item-buy">
            <div class="price">¥{{ item.newPrice }}</div>
            <div class="count">
              <div class="count-change" @click="subAmount(index)"><v-icon small>mdi-minus</v-icon></div>
              <div>{{ item.amount }}</div>
              <div class="count-change" @click="addAmount(index)"><v-icon small>mdi-plus</v-icon></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data(){
    return{
      count:0
    }
  },
  props:{
    itemInCart:{
      type:Array,
      default(){
        return []
      }
    },
    itemStatus:{
      type:Array,
      default(){
        return []
      }
    },
  },
  methods: {
    checkSelect(index) {
      this.itemStatus[index] = ! this.itemStatus[index]
      this.$emit('checkSelect',this.itemStatus)
      this.$forceUpdate()
      // console.log('shopping list checkSelect')
    },
    subAmount(index){
      if (this.itemInCart[index].amount > 0) this.itemInCart[index].amount -= 1
      this.$forceUpdate()
      this.$emit('subAmount',index)
    },
    addAmount(index){
      this.itemInCart[index].amount += 1
      this.$forceUpdate()
      this.$emit('addAmount',index)
    }
  },
  activated() {
    // console.log('shopping list activated', this.count,this.$store.getters.itemCount)
    if (this.count !== this.$store.getters.itemCount){
      let _list = new Array(this.$store.getters.itemCount - this.count).fill(true)
      this.itemStatus.push(..._list)
    }
    this.count = this.$store.getters.itemCount
    this.$forceUpdate()
    // console.log('shopping list activated',this.count,this.$store.getters.itemCount)
    // console.log('shopping list activated',this.$store.getters.itemCount);
  },
}
</script>

<style scoped>
.count-change{
  border-radius: 50%;
  /*border: 1px solid black;*/
  background-color: rgb(238, 238, 238);
  width: 26px;
  height: 26px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  line-height: 24px;
}

.shopping-item{
  padding-bottom: 44px;
}

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
  display: flex;
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