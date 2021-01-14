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
      <v-tabs v-model="tab" height="40px" fixed-tabs color="pink lighten-3">
        <v-tab v-for="item in tabs" :key="item.tab" @click="tabChange(item.type)">{{ item.tab }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item.tab">
          <detail-item :detail="details[item.type].list"/>
        </v-tab-item>
      </v-tabs-items>

      <!--      loading-->
      <loading v-show="snackbar"></loading>
    </v-main>
  </div>
</template>

<script>
import DetailItem from "@/components/DetailItem";
import Loading from "@/components/Loading";
import {getHomeData, getDetailData} from "@/network/home";

export default {
  name: 'Home',
  data() {
    return {
      tab: null,
      bannerHeight:0,
      banner: [],
      recommend: [],
      tabs: [{tab: '流行', type: 'pop'}, {tab: '新款', type: 'new'}, {tab: '精选', type: 'sell'}],
      details: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []},
      },
      type:'pop',
      snackbar: false,
    }
  },
  components: {
    Loading,
    DetailItem
  },
  computed: {
    // bannerHeight() {
    //   // 获取屏幕宽度 然后计算轮播图的显示高度
    //   return document.body.clientWidth * 375 / 720
    // }
  },
  created() {
    this.getHomeData()
    this.getDetailData('pop')
    this.getDetailData('new')
    this.getDetailData('sell')
  },
  mounted() {
    window.addEventListener('scroll', this.loadMore, true);
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        // console.log(res)
        // 获取banner数据
        this.banner = res.data.data.banner.list
        // 获取recommend
        this.recommend = res.data.data.recommend.list
        // console.log(this.recommend)
      })
    },

    getDetailData(type) {
      getDetailData(type, this.details[type].page).then(res => {
        // console.log(res)
        this.detail = res.data.data.list
        this.details[type].list.push(...this.detail)
        this.details[type].page += 1
        // console.log(this.details)
      })
    },

    tabChange(type){
      this.type = type
    },

    loadMore() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.bannerHeight = document.body.clientWidth * 375 / 720
        // let clientHeight = document.documentElement.clientHeight; //document.documentElement获取数据
        let clientHeight = screen.height
        let scrollTop = document.documentElement.scrollTop; //document.documentElement获取数据
        let scrollHeight = document.documentElement.scrollHeight;//document.documentElement获取数据
        // console.log(clientHeight,scrollTop,scrollHeight)
        if (clientHeight + scrollTop +1 >= scrollHeight && scrollHeight > clientHeight * 2) {
          setTimeout(()=>{
            // console.log('上拉加载')
            this.snackbar = true
            this.getDetailData(this.type)
          },500)
        }
      }, 15)
    }
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

</style>
