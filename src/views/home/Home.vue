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
          height="40px"
          fixed-tabs
          color="pink lighten-3"
      >
        <v-tab>
          流行
        </v-tab>
        <v-tab>
          新款
        </v-tab>
        <v-tab>
          精选
        </v-tab>
      </v-tabs>

      <!--      detail-->
      <v-container fluid class="detail">
        <v-row dense>
          <v-col v-for="(item, index) in detail" :key="index" cols="6">
            <v-card elevation="0">
              <v-img :src="item.show.img"></v-img>
              <v-row class="row-detail">
                <v-card-text class='text-detail' v-text="item.props[0]"></v-card-text>
              </v-row>
              <v-row class="row-detail">
                <v-card-text class='price-detail'>
                  ￥{{item.price}}
                  <v-icon class="icon-detail">mdi-star</v-icon>
                  {{ item.cfav }}
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>

  </div>
</template>

<script>
import {getHomeData, getDetailData} from "@/network/home";

export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      recommend: [],
      detail:[]
    }
  },
  components: {},
  computed: {
    bannerHeight() {
      // 获取屏幕宽度 然后计算轮播图的显示高度
      return document.body.clientWidth * 375 / 720
    }
  },
  created() {
    this.getHomeData()
    this.getDetailData('pop',1)
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
    getDetailData(type,page){
      getDetailData(type,page).then(res=>{
        console.log(res)
        this.detail = res.data.data.list
        console.log(this.detail)
      })
    }
  }
}
</script>

<style scoped>
.v-toolbar__title {
  color: white;
  font-size: 16px;
}

.text-recommend{
  padding: 4px;
  text-align: center;
}

.recommend {
  padding: 8px 8px 28px;
  border-bottom: 10px solid #eee;
}
.text-detail{
  font-size: 12px;
  padding: 4px 4px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row-detail{
  margin: 0;
  height: 18px;
}


.price-detail{
  font-size: 10px;
  padding: 0px;
  color: #F48FB1;
}

.icon-detail{
  font-size: 15px;
  color: #F48FB1;
}
</style>