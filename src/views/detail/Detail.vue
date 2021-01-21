<template>
  <div id="detail">
    <!--    detail-nav-bar-->
    <detail-nav-bar @tab-index="getTabIndex" :pos="pos"></detail-nav-bar>

    <v-main class="detail-main">

      <v-tabs-items v-model="tabIndex">
        <v-tab-item>
          <!--      detail-carousel-->
          <detail-carousel :topImages="topImages"></detail-carousel>

          <!--      detail-good-->
          <detail-good :goodInfo="goodInfo"></detail-good>

          <!--      detail-shop-->
          <detail-shop :shopInfo="shopInfo"></detail-shop>

          <!--      detail-info-->
          <detail-info :detailInfo="detailInfo"></detail-info>

          <!--      detail-item-params-->
          <detail-item-params :itemParams="itemParams" v-if="itemParams" ref="params"></detail-item-params>

          <!--      detail-rate-->
          <detail-rate :rate="rate" ref="rate"></detail-rate>

          <!--      detail-recommend-->
          <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
        </v-tab-item>
        <v-tab-item>
          <!--      detail-item-params-->
          <detail-item-params :itemParams="itemParams" v-if="itemParams" ref="params"></detail-item-params>

          <!--      detail-rate-->
          <detail-rate :rate="rate" ref="rate"></detail-rate>

          <!--      detail-recommend-->
          <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
        </v-tab-item>
        <v-tab-item>
          <!--      detail-rate-->
          <detail-rate :rate="rate" ref="rate"></detail-rate>

          <!--      detail-recommend-->
          <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
        </v-tab-item>
        <v-tab-item>
          <!--      detail-recommend-->
          <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
        </v-tab-item>
      </v-tabs-items>

    </v-main>
    <!--    detail-bottom-->
    <detail-bottom></detail-bottom>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/components/DetailNavBar";
import DetailCarousel from "@/views/detail/components/DetailCarousel";
import DetailGood from "@/views/detail/components/DetailGood";
import DetailShop from "@/views/detail/components/DetailShop";
import DetailInfo from "@/views/detail/components/DetailInfo";
import DetailItemParams from "@/views/detail/components/DetailItemParams";
import DetailRate from "@/views/detail/components/DetailRate";
import DetailRecommend from "@/views/detail/components/DetailRecommend";
import DetailBottom from "@/views/detail/components/DetailBottom";
import {getDetail, getRecommend} from "@/network/database";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailGood,
    DetailShop,
    DetailInfo,
    DetailItemParams,
    DetailRate,
    DetailRecommend,
    DetailBottom
  },
  data() {
    return {
      tabIndex: 0,
      tabs: ['商品', '参数', '评论', '推荐'],
      topImages: [],
      goodInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      recommend: [],
      detailScrollTop: 0,
      pos: {tab: 0, 'goodPosition': 0, 'paramsPosition': 0, 'ratePosition': 0, 'recommendPosition': 0}
    }
  },
  created() {
    this.getDetail()
    this.getRecommend()
    console.log('detail created')
  },
  mounted() {
    window.addEventListener('scroll', this.getDetailScroll)
    window.scrollTo({
      top: 0,
      left: 0,
    })
    console.log('detail mounted')
  },
  updated() {
    console.log('detail updated')
  },
  destroyed() {
    console.log('detail destroyed')
    window.removeEventListener('scroll', this.getDetailScroll)
  },
  methods: {
    getDetail() {
      getDetail(this.$route.query.iid).then(res => {
        let data = res.result
        console.log(data)
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
        // get detail info
        this.detailInfo = data.detailInfo
        this.detailInfo['detailImage'] = data.detailInfo.detailImage[0].list
        // get item params
        this.itemParams = data.itemParams
        this.itemParams['rule'] = data.itemParams.rule.tables.shift()
        this.itemParams['info'] = data.itemParams.info.set
        data.rate.list ? this.rate = data.rate.list.slice(-1)[0] : this.rate = {}
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    getDetailScroll() {
      this.detailScrollTop = document.documentElement.scrollTop + 1; //页面滚动高度
      if (this.detailScrollTop < this.pos['paramsPosition']) this.pos.tab = 0
      else if (this.pos['paramsPosition'] <= this.detailScrollTop && this.detailScrollTop < this.pos['ratePosition']) this.pos.tab = 1
      else if (this.pos['ratePosition'] <= this.detailScrollTop && this.detailScrollTop < this.pos['recommendPosition']) this.pos.tab = 2
      else if (this.pos['recommendPosition'] <= this.detailScrollTop && screen.height < this.pos['recommendPosition']) this.pos.tab = 3
      this.getPosition()
    },
    getPosition() {
      let paramsPosition = document.querySelectorAll("div[id='detail-params']")[0].offsetTop; //params位置
      let ratePosition = document.querySelectorAll("div[id='detail-rate']")[0].offsetTop; //rate位置
      let recommendPosition = document.querySelectorAll("div[id='detail-recommend']")[0].offsetTop; //recommend位置
      this.pos['paramsPosition'] = paramsPosition
      this.pos['ratePosition'] = ratePosition
      this.pos['recommendPosition'] = recommendPosition
      console.log(this.pos)
    },
    getTabIndex(num) {
      this.tabIndex = num
      // console.log('get tab index',num)
    }
  }
}
</script>

<style scoped>

</style>