<template>
  <div class="shop-info">
    <div class="shop-logo-title">
      <span class="shop-logo"><img :src="shopInfo.shopLogo" alt=""></span>
      <span class="shop-title">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-desc">
      <div class="shop-desc-left">
        <div>
          <div>{{ shopInfo.cSells | sell }}</div>
          <div>总销量</div>
        </div>
        <div>
          <div>{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-desc-right">
        <div>
          <span>描述相符</span>
          <span :class="scoreColor(shopInfo.score[0]['isBetter'])">{{shopInfo.score[0]['score']}}</span>
          <span>{{score(shopInfo.score[0]['isBetter'])}}</span></div>
        <div><span>价格合理</span><span></span><span></span></div>
        <div><span>质量满意</span><span></span><span></span></div>
      </div>
    </div>
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
    }
  },
  methods:{
    score(isBetter){
      if(isBetter)return '高'
      return '低'
    },
    scoreColor(isBetter){
      if(isBetter) return {better:isBetter}
      return {worse:!isBetter}
    }
  }
}
</script>

<style scoped>
.active{
  color: #5ea732;
}

.shop-desc-left {
  border-right: 2px solid rgb(229, 229, 229);
  width: 50%;
  display: flex;
}


.shop-desc {
  display: flex;
}

.shop-logo img {
  width: 43px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 50%;
}

.shop-logo-title {
  padding: 26px 8px;
  position: relative;
}

.shop-title {
  color: rgb(119, 119, 119);
  position: absolute;
  top: 35px;
  left: 60px;
}
</style>