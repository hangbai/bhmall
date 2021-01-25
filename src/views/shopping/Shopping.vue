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
      <shopping-list :itemInCart="itemInCart" :itemStatus="itemStatus" @checkSelect="checkSelect"></shopping-list>

      <!--      shopping-payment-->
      <shopping-payment :isActive="isActive" @selectAll="selectAll"></shopping-payment>
    </v-main>
  </div>
</template>

<script>
import ShoppingList from "@/views/shopping/components/ShoppingList";
import ShoppingPayment from "@/views/shopping/components/ShoppingPayment";

export default {
  name: "Shopping",
  data(){
    return {
      isActive:true,
    }
  },
  components: {
    ShoppingList,
    ShoppingPayment
  },
  mounted() {
    console.log('shopping mounted')
  },
  computed: {
    itemCount(){
      return this.$store.getters.itemCount
    },
    itemInCart(){
      return this.$store.getters.itemInCart
    },
    itemStatus(){
      return this.$store.getters.itemStatus
    },
  },
  methods:{
    selectAll(){
      this.isActive=true
      console.log('selectAll-2',this.$store.state.itemStatus)
    },
    checkSelect(e){
      if (e.indexOf(false) !== -1) this.isActive=false
      else this.isActive=true
      console.log('chech2',e)
    },
  }
}
</script>

<style scoped>
.v-toolbar__title {
  color: white;
  font-size: 16px !important;
  font-weight: bold;
}
</style>