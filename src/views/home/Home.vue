<template>
  <div class="home">
    <!--    topbar-->
    <v-app-bar
        app
        color='pink lighten-3'
        height="44px"
        flat
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>购物街</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <!--    carousel-->
      <v-carousel
          app
          :show-arrows="false"
          :height="bannerHeight"
          cycle
          hide-delimiter-background
          delimiter-icon="mdi-minus"
      >
        <v-carousel-item
            v-for="(item,index) in banner"
            :key="index" :src="item.image">
        </v-carousel-item>
      </v-carousel>

      <!--    recommend-->
      <v-container fluid class="recommend">
        <v-row dense>
          <v-col v-for="(item, index) in recommend" :key="index" cols="3">
            <v-card elevation="0">
              <v-img :src="item.image"></v-img>
              <v-card-text class="text-recommend" v-text="item.title"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!--    feature-->
      <v-container>
        <v-img src="@/assets/img/home/recommend_bg.jpg"></v-img>
      </v-container>

      <!--      tabs-->
      <v-tabs
          class="tab-fix"
          v-show="tabFixShow"
          v-model="tab"
          height="40px"
          fixed-tabs
          color="pink lighten-3">
        <v-tab v-for="item in tabs" :key="item.tab" @click="tabChange(item.type)">{{ item.tab }}</v-tab>
      </v-tabs>
      <v-tabs v-model="tab" height="40px" fixed-tabs color="pink lighten-3" class='Pop-Over' ref="tabPos">
        <v-tab v-for="item in tabs" :key="item.tab" @click="tabChange(item.type)">{{ item.tab }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item.tab">
          <detail-list :detail="details[item.type].list"/>
        </v-tab-item>
      </v-tabs-items>

      <!--      loading-->
      <loading v-show="loading"></loading>

      <!--      backtop-->
      <back-top :backTopShow="backTopShow"></back-top>
    </v-main>
  </div>
</template>

<script>
import DetailList from "@/components/DetailList";
import Loading from "@/components/Loading";
import BackTop from "@/components/BackTop";
import {getHomeData, getDetailData} from "@/network/database";

export default {
  name: 'Home',
  data() {
    return {
      tab: null,
      type: 'pop',
      bannerHeight: 0,
      tabPosition: 0,
      banner: [],
      recommend: [],
      tabs: [{tab: '流行', type: 'pop'}, {tab: '新款', type: 'new'}, {tab: '精选', type: 'sell'}],
      details: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []},
      },
      loading: false,
      backTopShow: false,
      tabFixShow: false,
      scrollTop:0,
      reservedTop:0
    }
  },
  components: {
    Loading,
    DetailList,
    BackTop
  },
  created() {
    // console.log('created')
    this.getHomeData()
    this.getDetailData('pop')
    this.getDetailData('new')
    this.getDetailData('sell')
  },
  destroyed() {
    // console.log('destroyed')
  },
  activated() {
    // console.log('activated',this.reservedTop)
    window.scrollTo({
      top: this.reservedTop,
      left: 0,
    })
  },
  deactivated() {
    this.reservedTop = this.scrollTop
    // console.log('deactivated',this.scrollTop)
  },
  mounted() {
    this.bannerHeight = document.body.clientWidth * 375 / 720
    window.addEventListener('scroll', this.getScroll, true);
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        // 获取banner数据
        this.banner = res.data.data.banner.list
        // 获取recommend
        this.recommend = res.data.data.recommend.list
      })
    },

    getDetailData(type) {
      getDetailData(type, this.details[type].page).then(res => {
        this.details[type].list.push(...res.data.data.list)
        this.details[type].page += 1
      })
    },

    tabChange(type) {
      this.type = type
      window.scrollTo({
        top: this.tabPosition,
        left: 0,
        behavior:'smooth'
      });
    },

    getScroll() {
      let clientHeight = screen.height //屏幕高度
      this.scrollTop = document.documentElement.scrollTop; //页面滚动高度
      let scrollHeight = document.documentElement.scrollHeight;//页面总高度
      this.backTopShow = this.scrollTop > 1000
      this.tabPosition = this.$refs.tabPos.$el.offsetTop //tab位置
      this.tabFixShow = this.scrollTop >= this.tabPosition
      if (clientHeight + this.scrollTop + 1 >= scrollHeight && scrollHeight > clientHeight * 2) {
        setTimeout(() => {
          // console.log('上拉加载')
          this.loading = true
          this.getDetailData(this.type)
        }, 500)
      }
    },
  }
}
</script>

<style scoped>
.v-toolbar__title {
  color: white;
  font-size: 16px;
}

.text-recommend {
  padding: 4px;
  text-align: center;
}

.recommend {
  padding: 8px 8px 28px;
  border-bottom: 10px solid #eee;
}

.v-tab--active:before {
  background-color: white;
}

.tab-fix {
  position: fixed;
  top: 44px;
  z-index: 9;
}
</style>
