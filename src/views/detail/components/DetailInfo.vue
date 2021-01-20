<template>
  <div class="detail-info">
    <div class="di-col">
      <div class="di-row1"><div class="di-square"></div><div class="di-line"></div></div>
      <div class="di-row2">{{ detailInfo.desc }}</div>
      <div class="di-row3"><div class="di-line"></div><div class="di-square"></div></div>
      <div class="di-row4">穿着效果</div>
    </div>
    <div class="di-images">
      <div class="di-image" v-for="(item, index) in detailInfo.detailImage" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-info{
  border-bottom: 5px solid rgb(242, 245, 248);
}

.di-image{
  margin-bottom: -3px;
}

.di-image img{
  width: 100%;
}

/*----------------*/
.di-col{
  padding: 16px 18px ;
  position: relative;
}

.di-row1{
  display: flex;
}

.di-row2{
  color: rgb(102, 102, 102);
  font-size: 13px;
  margin-top: 13px;
  margin-bottom: 12px;
  line-height: 16px;
}

.di-row3{
  display: flex;
  position: absolute;
  right: 15px;
}

.di-row4{
  margin-top: 23px;
}

.di-line{
  border-bottom: 1px solid rgb(163, 163, 165);
  width: 85px;
}

.di-square{
  height: 5px;
  width: 5px;
  background-color: rgb(51, 51, 51);
}
</style>