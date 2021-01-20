<template>
  <v-carousel
      id="detail-carousel"
      app
      :height="bannerHeight"
      cycle
      :show-arrows="false"
      hide-delimiter-background
  >
    <v-carousel-item
        v-for="(item,index) in topImages"
        :key="index"
    >
      <v-sheet color="white">
        <v-img :src="item" :lazy-src="defaultImage" transition="scale-transition">
          <template v-slot:placeholder>
            <v-row
                class="ma-0"
                align="center"
                justify="center"
                style="height:100%"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
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
      defaultImage: require('@/assets/img/common/placeholder1.png')
    }
  },
  mounted() {
    this.bannerHeight = document.body.clientWidth * 575 / 720
  }
}
</script>

<style scoped>
.v-responsive__sizer{
  transition: padding-top 1.2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>