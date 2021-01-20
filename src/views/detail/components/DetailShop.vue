<template>
  <div class="shop-info">
    <div class="shop-logo-title">
      <span class="shop-logo"><img :src="shopInfo.shopLogo" alt=""></span>
      <span class="shop-title">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-desc">
      <div class="shop-desc-left">
        <div class="left-sub">
          <div class="left-sub-left">
            <div class="shop-desc-left-number">{{ shopInfo.cSells | sell }}</div>
            <div class="shop-desc-title">总销量</div>
          </div>
          <div class="left-sub-right">
            <div class="shop-desc-left-number">{{ shopInfo.cGoods }}</div>
            <div class="shop-desc-title">全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="shop-desc-right">
        <div class="right-sub">
          <div v-for="(item, index) in shopInfo.score" :key="index" class="shop-desc-right-row">
            <div>{{ item.name }}</div>
            <div :class="scoreColor(item.isBetter)" class="score-middle" >{{ item.score }}</div>
            <div>
              <span :class="scoreBackground(item.isBetter)">{{ item.isBetter | scoreValue }}</span>
            </div></div>
        </div>
      </div>
    </div>
    <div class="shop-link"><span class="shop-link-title">进店逛逛</span></div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sell(number) {
      if (number < 10000) return number
      return (number / 10000).toFixed(1) + '万'
    },
    scoreValue(isBetter) {
      if (isBetter) return '高'
      return '低'
    },
  },
  methods: {
    scoreColor(isBetter) {
      if (isBetter) return {better: isBetter}
      return {worse: !isBetter}
    },
    scoreBackground(isBetter){
      if (isBetter) return {betterbg: isBetter}
      return {worsebg: !isBetter}
    }
  }
}
</script>

<style scoped>
.shop-info{
  border-bottom: 5px solid rgb(242, 245, 248);
}

.shop-link{
  text-align: center;
  padding-top: 6px;
  padding-bottom: 30px;
}

.shop-link-title{
  background-color: rgb(242, 245, 248);
  padding: 6px 45px;
  color: rgb(110, 110, 111);
  font-size: 14px;
  border-radius: 8px;
}

/*-----------------*/
.shop-desc {
  display: flex;
}

.shop-desc-left {
  width: 50%;
}

.left-sub{
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  font-size: 12px;
  text-align: center;
  display: flex;
}

.left-sub-left{
  position: absolute;
  right: 53%;
}

.left-sub-right{
  position: absolute;
  right:0px;
  width: 50%;
  border-right: 2px solid rgb(229, 229, 229);
  padding-right: 6px;
}

.shop-desc-left-number{
  font-size: 18px;
  padding-bottom: 5px;
}

.shop-desc-right{
  font-size: 13px;
  margin-left: 30px;
}

.shop-desc-right-row{
  height: 26px;
  display: flex;
}

/*--------------------*/
.score-middle{
  width: 34px;
  margin-left: 15px;
}

.worse {
  color: rgb(94, 167, 50);

}
.worsebg{
  color: white;
  background-color: rgb(94, 167, 50);
}

.better {
  color: rgb(241, 62, 58);
}
.betterbg{
  color: white;
  background-color:rgb(241, 62, 58) ;
}
/*-------------------*/
.shop-logo img {
  width: 43px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 50%;
}

.shop-logo-title {
  padding: 26px 8px 16px;
  position: relative;
}

.shop-title {
  color: rgb(119, 119, 119);
  position: absolute;
  top: 35px;
  left: 65px;
}
</style>