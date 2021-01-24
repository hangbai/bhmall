<template>
  <div class="shopping-item">
    <div>
      <div class="item">
        <div class="item-check" :class="{active:isActive}" @click="checkSelect">
          <img src="@/assets/img/cart/tick.svg">
        </div>
        <div class="item-image"><img :src="item.imgURL" alt=""></div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-dec">商品描述:{{ item.desc }}</div>
          <div class="item-buy">
            <div class="price">¥{{ item.newPrice }}</div>
            <div class="count">x6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      item: {
        iid: "1m745k0",
        imgURL: "//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg",
        title: "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮",
        desc: "你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮…助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~",
        newPrice: "98.00"
      },
      isActive: false
    }
  },
  methods: {
    checkSelect() {
      this.isActive = !this.isActive
      console.log('click')
    }
  }
}
</script>

<style scoped>
.item-check {
  line-height: 110px;
  margin: 5px;
  min-width: 20px;
}

.item-check img {
  vertical-align: middle;
  border-radius: 50%;
  background-color: rgb(244, 143, 177);
  border: 2px solid rgb(244, 143, 177);
}

.active img {
  background-color: white;
  border: 2px solid rgb(204, 204, 204);
}

.count {
  position: absolute;
  right: 0;
}

.price {
  color: rgb(244, 143, 177);
}

.item-buy {
  font-size: 18px;
  padding-top: 20px;
  position: relative;
  display: flex;
}

.item-dec {
  font-size: 14px;
  padding-top: 10px;
  color: rgb(111, 111, 111);
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}

.item-info {

  padding-top: 6px;
  margin-left: 15px;
  margin-right: 15px;
  white-space: nowrap;
  overflow: hidden;

}

.item-image {
  width: 80px;
  padding: 10px 0px;
}

.item-image img {
  height: 100%;
  width: 80px;
  border-radius: 5px;
}

.item {
  display: flex;
  height: 121px;
  overflow: auto;
  border-bottom: 1px solid rgb(204, 204, 204);
}
</style>