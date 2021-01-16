<template>
  <v-carousel
      app
      :height="bannerHeight"
      cycle
      :show-arrows="false"
      hide-delimiter-background
      transition="slide-x-transition"
  >
    <v-carousel-item
        v-for="(item,index) in topImages"
        :key="index"
    >
      <v-sheet height="100%" tile color="white"
               :style="{'background-image': `url(${item})`, 'background-position' : 'top' , 'background-size': '100%'}">
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "DetailCarousel",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      bannerHeight: 0,
    }
  },
  mounted() {
    this.bannerHeight = document.body.clientWidth * 575 / 720
  }
}
</script>

<style scoped>

</style>