<template>
  <div id="detail" >
    <!--    detail-nav-bar-->
    <detail-nav-bar></detail-nav-bar>

    <v-main class="detail-main">
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


    </v-main>
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
    DetailRecommend
  },
  data() {
    return {
      topImages: [],
      goodInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      recommend: [],
      detailScrollTop: 0,
      navChange: {tab: 0, 'goodPosition': 0, 'paramsPosition': 0, 'ratePosition': 0, 'recommendPosition': 0}
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
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.getPosition()
        console.log('detail mounted2')
      },500)

    })
    console.log('detail mounted')
  },
  updated() {
    this.getPosition()
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
        data.rate.list ? this.rate = data.rate.list.slice(-1)[0]: this.rate ={}
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    getDetailScroll() {
      this.detailScrollTop = document.documentElement.scrollTop; //页面滚动高度
      if (this.detailScrollTop < this.navChange['paramsPosition']) this.navChange.tab = 0
      else if (this.navChange['paramsPosition']<= this.detailScrollTop && this.detailScrollTop < this.navChange['ratePosition']) this.navChange.tab = 1
      else if (this.navChange['ratePosition']<= this.detailScrollTop && this.detailScrollTop < this.navChange['recommendPosition']) this.navChange.tab = 2
      else if (this.navChange['recommendPosition']<= this.detailScrollTop) this.navChange.tab = 3
      console.log('detail',this.detailScrollTop)
    },
    getPosition() {
      let paramsPosition = this.$refs.params.$el.offsetTop //params位置
      let ratePosition = this.$refs.rate.$el.offsetTop //rate位置
      let recommendPosition = this.$refs.recommend.$el.offsetTop //recommend位置
      this.navChange['paramsPosition'] = paramsPosition
      this.navChange['ratePosition'] = ratePosition
      this.navChange['recommendPosition'] = recommendPosition
      // console.log(this.navChange)
    },
  }
}
</script>

<style scoped>
.detail-main{
  margin-top: 44px;
  padding-top: 0px!important;
  height: calc(100vh - 44px);

  overflow-y: scroll;
}
</style>