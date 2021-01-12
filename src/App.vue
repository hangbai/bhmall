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
    BottomNavigation
  }
};
</script>
