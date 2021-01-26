<template>
  <div id="shopping">
    <v-app-bar
        app
        color='pink lighten-3'
        height="44px"
        flat
        class="top-bar"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>购物车({{ itemCount }})</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <!--      shopping-list-->
      <shopping-list
          :itemInCart="itemInCart"
          :itemStatus="itemStatus"
          @subAmount="subAmount"
          @addAmount="addAmount"
          @checkSelect="checkSelect"></shopping-list>

      <!--      shopping-payment-->
      <shopping-payment :isActive="isActive" :payAmount="payAmount" :total="total"
                        @selectAll="selectAll"></shopping-payment>
    </v-main>
  </div>
</template>

<script>
import ShoppingList from "@/views/shopping/components/ShoppingList";
import ShoppingPayment from "@/views/shopping/components/ShoppingPayment";

export default {
  name: "Shopping",
  data() {
    return {
      isActive: true,
      itemStatus: [],
      payAmount: 0,
      total: 0,
    }
  },
  components: {
    ShoppingList,
    ShoppingPayment
  },
  mounted() {
    this.itemStatus = new Array(this.itemCount).fill(true)
    console.log('shopping mounted', this.itemStatus)
  },
  activated() {
    this.getPayment()
    console.log('shopping activated')
  },
  computed: {
    itemCount() {
      return this.$store.getters.itemCount
    },
    itemInCart() {
      return this.$store.getters.itemInCart
    },
  },
  methods: {
    selectAll() {
      this.isActive = true
      this.itemStatus = new Array(this.itemCount).fill(true)
      this.getPayment()
      // console.log('selectAll',this.$store.state.itemStatus)
    },
    checkSelect(e) {
      if (e.indexOf(false) !== -1) this.isActive = false
      else this.isActive = true
      this.getPayment()
      // console.log('shopping checkSelect', e)
    },
    getPayment() {
      this.payAmount = 0
      this.total = 0
      for (let i = 0; i < this.itemStatus.length; i++) {
        if (this.itemStatus[i] === true) {
          // console.log('amount', i, this.itemInCart[i].amount)
          this.total += this.itemInCart[i].amount * this.itemInCart[i].newPrice
          this.payAmount += this.itemInCart[i].amount
        }
      }
    },
    subAmount(){
      this.getPayment()
      // console.log('subAmount',index)
    },
    addAmount(){
      this.getPayment()
      // console.log('addAmount',index)
    }
  },
}
</script>

<style scoped>
.v-toolbar__title {
  color: white;
  font-size: 16px !important;
  font-weight: bold;
}
</style>