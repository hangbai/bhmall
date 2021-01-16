<template>
  <div id="detail">
    <!--    detail-nav-bar-->
    <detail-nav-bar></detail-nav-bar>

    <v-main>
      <!--      detail-carousel-->
      <detail-carousel :topImages="topImages"></detail-carousel>

<!--      detail-good-->
      <detail-good></detail-good>

      Detail{{ this.$route.query }}
    </v-main>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/components/DetailNavBar";
import DetailCarousel from "@/views/detail/components/DetailCarousel";
import DetailGood from "@/views/detail/components/DetailGood";
import {getDetail} from "@/network/database";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailGood
  },
  data() {
    return {
      topImages:[]
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.$route.query.iid).then(res => {
        console.log(res)
        // get carousel images
        this.topImages=res.data.result.itemInfo.topImages

        // console.log(this.topImages)
      })
    }
  }
}
</script>

<style scoped>

</style>