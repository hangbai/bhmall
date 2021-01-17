<template>
  <div id="detail">
    <!--    detail-nav-bar-->
    <detail-nav-bar></detail-nav-bar>

    <v-main>
      <!--      detail-carousel-->
      <detail-carousel :topImages="topImages"></detail-carousel>

      <!--      detail-good-->
      <detail-good :goodInfo="goodInfo"></detail-good>

      <!--      detail-shop-->
      <detail-shop :shopInfo="shopInfo"></detail-shop>

      Detail{{ this.$route.query }}
    </v-main>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/components/DetailNavBar";
import DetailCarousel from "@/views/detail/components/DetailCarousel";
import DetailGood from "@/views/detail/components/DetailGood";
import DetailShop from "@/views/detail/components/DetailShop";
import {getDetail} from "@/network/database";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailGood,
    DetailShop,
  },
  data() {
    return {
      topImages: [],
      goodInfo: {},
      shopInfo:{}
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.$route.query.iid).then(res => {
        console.log(res)
        let data = res.data.result
        // get carousel images
        this.topImages = data.itemInfo.topImages
        // get good info
        this.goodInfo = data.itemInfo
        this.goodInfo['saleNumber'] = data.columns[0]
        this.goodInfo['favNumber'] = data.columns[1]
        let services = data.shopInfo.services
        this.goodInfo['services'] = services.slice(0, -1)
        this.goodInfo['deliveryTime'] = services.slice(-1)[0].name
        // get shop info
        this.shopInfo = data.shopInfo

      })
    }
  }
}
</script>

<style scoped>

</style>