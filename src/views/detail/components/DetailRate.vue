<template>
  <div id='detail-rate'>
    <div class="rate" v-if="Object.keys(rate).length!==0">
      <div class="rate-row1">
        <div>用户评价</div>
        <div class="rate-row1-right">
          <div>更多</div>
          <div><img class="rate-row1-right-img" src="@/assets/img/common/back.svg"></div>
        </div>
      </div>
      <div class="rate-row2" v-if="rate.user">
        <div>
          <img class="rate-row2-left-img" :src="rate.user.avatar">
        </div>
        <div class="rate-row2-left-text"><span>{{ rate.user.uname }}</span></div>
      </div>
      <div class="rate-row3">
        {{ rate.content }}
      </div>
      <div class="rate-row4">
        <span>{{ rate.created | timeFormat }}</span>
        <span>{{ rate.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    timeFormat(timestamp) {
      let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() + ' ';
      // h = date.getHours() + ':';
      // m = date.getMinutes() + ':';
      // s = date.getSeconds();
      return Y + M + D;
    }
  }
}
</script>

<style scoped>
.rate-row4 {
  color: rgb(157, 157, 157);
  font-size: 10px;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-left: 3px;
}

.rate-row3 {
  font-size: 14px;
  color: rgb(119, 119, 119);
  padding-top: 3px;
  padding-left: 3px;
}

/*--------------------*/
.rate-row2 {
  display: flex;
  padding-top: 10px;
}

.rate-row2-left-img {
  border-radius: 50%;
  width: 40px;
  margin-right: 10px;
}

.rate-row2-left-text {
  line-height: 40px;
}

/*-----------------------*/
.rate-row1 {
  border-bottom: 1px solid rgb(229, 229, 229);
  display: flex;
  position: relative;
  padding-bottom: 13px;
}

.rate-row1-right {
  position: absolute;
  right: 0;
  font-size: 13px;
  display: flex;
  padding-top: 3px;
}

.rate-row1-right-img {
  width: 14px;
  transform: rotateY(180deg);
  padding-top: 2px;
  margin-right: 3px;
  margin-left: 6px;
}

.rate {
  padding: 18px 13px;
  border-bottom: 5px solid #f2f5f8;
}
</style>