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
      <v-toolbar-title>购物车(0)</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <!--      shopping-list-->
      <shopping-list></shopping-list>

      <!--      shopping-payment-->
      <shopping-payment></shopping-payment>
    </v-main>
  </div>
</template>

<script>
import ShoppingList from "@/views/shopping/components/ShoppingList";
import ShoppingPayment from "@/views/shopping/components/ShoppingPayment";

export default {
  name: "Shopping",
  components: {
    ShoppingList,
    ShoppingPayment
  },
  mounted() {
    console.log('shopping mounted',this.$store.state.itemInCart)
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