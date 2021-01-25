<template>
  <div id="detail">
    <!--    detail-nav-bar-->
    <detail-nav-bar @tab-index="getTabIndex" :pos="pos"></detail-nav-bar>

    <v-main class="detail-main">
      <!--      detail-carousel-->
      <detail-carousel :topImages="topImages" v-show="posShow.goodShow"></detail-carousel>

      <!--      detail-good-->
      <detail-good :goodInfo="goodInfo" v-show="posShow.goodShow"></detail-good>

      <!--      detail-shop-->
      <detail-shop :shopInfo="shopInfo" v-show="posShow.goodShow"></detail-shop>

      <!--      detail-info-->
      <detail-info :detailInfo="detailInfo" v-show="posShow.goodShow"></detail-info>

      <!--      detail-item-params-->
      <detail-item-params :itemParams="itemParams" v-if="itemParams" ref="params"
                          v-show="posShow.paramsShow"></detail-item-params>

      <!--      detail-rate-->
      <detail-rate :rate="rate" ref="rate" v-show="posShow.rateShow"></detail-rate>

      <!--      detail-recommend-->
      <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>

      <detail-back-top :backTopShow="backTopShow" @back-top="backTop"></detail-back-top>
    </v-main>
    <!--    detail-bottom-->
    <detail-bottom :itemToCart="itemToCart"></detail-bottom>
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
import DetailBackTop from "@/views/detail/components/DetailBackTop";
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
    DetailBottom,
    DetailBackTop
  },
  data() {
    return {
      backTopShow: false,
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
      pos: {tab: 0, 'goodPosition': 0, 'paramsPosition': 0, 'ratePosition': 0, 'recommendPosition': 0},
      posShow: {goodShow: true, paramsShow: true, rateShow: true},
      itemToCart:{}
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
        // get itemToCart
        this.itemToCart['iid'] = data.itemInfo.iid
        this.itemToCart['title'] = data.itemInfo.title
        this.itemToCart['imgURL'] = data.itemInfo.topImages[0]
        this.itemToCart['des'] = data.itemInfo.desc
        this.itemToCart['newPrice'] = data.itemInfo.lowNowPrice
        this.itemToCart['amount'] = 1
        this.itemToCart['status'] = true
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    getDetailScroll() {
      this.detailScrollTop = document.documentElement.scrollTop; //页面滚动高度
      this.backTopShow = this.detailScrollTop > 1000
      this.getPosition()
    },
    getPosition() {
      // let paramsPosition = document.querySelectorAll("div[id='detail-params']")[0].offsetTop; //params位置
      // let ratePosition = document.querySelectorAll("div[id='detail-rate']")[0].offsetTop; //rate位置
      // let recommendPosition = document.querySelectorAll("div[id='detail-recommend']")[0].offsetTop; //recommend位置
      let paramsPosition = this.$refs.params.$el.offsetTop //params位置
      let ratePosition = this.$refs.rate.$el.offsetTop //rate位置
      let recommendPosition = this.$refs.recommend.$el.offsetTop //recommend位置
      this.pos['paramsPosition'] = paramsPosition
      this.pos['ratePosition'] = ratePosition
      this.pos['recommendPosition'] = recommendPosition
      this.checkTab()
      // console.log(this.pos.tab, this.detailScrollTop, paramsPosition, ratePosition, recommendPosition)
    },
    getTabIndex(num) {
      this.tabIndex = num
      switch (num) {
        case 0:
          this.posShow = {goodShow: true, paramsShow: true, rateShow: true}
          break
        case 1:
          this.posShow = {goodShow: false, paramsShow: true, rateShow: true}
          break
        case 2:
          this.posShow = {goodShow: false, paramsShow: false, rateShow: true}
          break
        case 3:
          this.posShow = {goodShow: false, paramsShow: false, rateShow: false}
          break
      }
      // console.log('get tab index',num)
    },
    checkTab() {
      if (this.pos['ratePosition'] < this.pos['recommendPosition'] && this.pos['recommendPosition'] < this.detailScrollTop) this.pos.tab = 3
      else if (this.pos['ratePosition'] < this.pos['recommendPosition'] && this.pos['ratePosition'] < this.detailScrollTop) this.pos.tab = 2
      else if (this.pos['paramsPosition'] < this.pos['ratePosition'] && this.pos['paramsPosition'] < this.detailScrollTop) this.pos.tab = 1
      else if (this.pos['paramsPosition'] > this.detailScrollTop) this.pos.tab = 0
    },
    backTop(key) {
      this.posShow = key
    }
  }
}
</script>

<style scoped>

</style>