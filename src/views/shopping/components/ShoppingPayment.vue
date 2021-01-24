<template>
  <div class="payment ">
    <div class="p-row">
      <div class="total-select" :class="{active:isActive}" @click="checkSelect">
        <img src="@/assets/img/cart/tick.svg">
        <span>全选</span>
      </div>
      <div class="total-number">合计:¥0.00</div>
      <div class="total-pay">去计算(0)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingPayment",
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    checkSelect() {
      this.isActive = !this.isActive
      console.log('click')
    }
  }
}
</script>

<style scoped>
.total-select{
  color: rgb(136, 136, 136);
  font-size: 14px;
  line-height: 44px;
  min-width: 20px;
}

.total-select img {
  margin-left: 5px;
  margin-right: 5px;
  vertical-align: middle;
  border-radius: 50%;
  background-color: rgb(244, 143, 177);
  border: 2px solid rgb(244, 143, 177);
}

.active img {
  background-color: white;
  border: 2px solid rgb(204, 204, 204);
}

.total-number{
  line-height: 44px;
  color: rgb(115, 117, 115);
  margin-left: 20px;
}

.total-pay{
  position: absolute;
  right: 0;
  width: 100px;
  line-height: 44px;
  text-align: center;
  background-color: rgb(244, 143, 177);
  color: white;
  font-size: 14px;
}

.p-row{
  display: flex;
  position: relative;
}

.payment{
  width: 100%;
  position: fixed;
  bottom: 49px;
  height: 44px;
  background-color: rgb(238, 238, 238);
}
</style>