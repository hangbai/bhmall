<template>
  <v-app>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
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
