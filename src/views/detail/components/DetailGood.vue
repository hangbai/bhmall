<template>
  <v-container class="good-info">
    <v-row>
      <span class="title">{{ goodInfo.title }}</span>
    </v-row>
    <v-row>
      <span class="price">{{ goodInfo.price }}</span>
      <span class="old-price">{{ goodInfo.oldPrice }}</span>
      <span class="discount">
        <span color="#FF5777" class="discount-sub">{{ goodInfo.discountDesc }}</span>
      </span>
    </v-row>
    <v-row class="justify-space-between row-3">
      <span>{{ goodInfo.saleNumber }}</span>
      <span>{{ goodInfo.favNumber }}</span>
      <span>{{ goodInfo.deliveryTime }}</span>
    </v-row>
    <v-divider class="divider"></v-divider>
    <v-row class="justify-space-between row-4">
      <span
          class="ship-info"
          v-for="(item, index) in goodInfo.services"
          :key="index"
      >
        <img class="ship-img" :src="item.icon">
        <span>{{ item.name }}</span>
      </span>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DetailGood",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },
}
</script>

<style scoped>
.row-4 {
  padding: 15px 5px 18px;
  border-bottom: 5px solid rgb(242, 245, 248);
}

.ship-info {
  display: flex;
  position: relative;
  font-size: 13px;
  height: 20px;
}

.ship-img {
  height: 14px;
  width: 14px;
  margin-top: 3px;
}

.divider {
  margin: 18px 0px;
}

.row-3 {
  color: rgb(156, 156, 156);
  font-size: 13px;
  padding: 8px 5px 0px 5px;
}

.discount-sub {
  border-radius: 16px;
  background-color: rgb(255, 87, 119);
  padding: 1px 5px;
}

.discount {
  color: white;
  font-size: 12px;
  margin: 16px 0px 0px 3px;
}

.old-price {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  font-size: 14px;
  padding: 24px 0px;
}

.price {
  color: rgba(255, 88, 120);
  font-size: 24px;
  padding: 13px 5px;
}

.title {
  padding: 15px 5px 5px;
  font-size: 16px !important;
  line-height: 18px;
}
</style>