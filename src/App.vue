<template>
  <v-app>
    <router-view/>
    <bottom-navigation/>
  </v-app>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation";

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
