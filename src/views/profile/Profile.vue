<template>
  <div class="profile">
    <v-app-bar
        app
        color='pink lighten-3'
        height="44px"
        flat
        class="top-bar"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>BH商城</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <div class="p-row1">
        <div class="login">
          <div class='face'><img src="@/assets/img/profile/user.svg"></div>
          <div class="user">
            <div class="u-line1">登录/注册</div>
            <div class="u-line2">
              <img src="@/assets/img/profile/phone.svg">
              <div>暂无绑定手机号</div>
            </div>
          </div>
          <div class="user-detail"><img src="@/assets/img/common/back-white.svg"></div>
        </div>
        <div class="user-info">
          <div class="ui-block"><div><span>0.00</span>元</div><div>我的余额</div></div>
          <v-divider
              vertical
          ></v-divider>
          <div class="ui-block"><div><span>0</span>个</div><div>我的优惠</div></div>
          <v-divider
              vertical
          ></v-divider>
          <div class="ui-block"><div><span>0</span>分</div><div>我的积分</div></div>
        </div>
      </div>
      <div class="p-row2">
        <div class="prr1">
          <div><img src="@/assets/img/profile/message.svg" alt=""></div>
          <div class="prr-r">我的消息</div>
        </div>
        <div class="prr1">
          <div><img src="@/assets/img/profile/mall-bag.svg" alt=""></div>
          <div class="prr-r">商城积分</div>
        </div>
        <div class="prr1">
          <div><img src="@/assets/img/profile/card.svg" alt=""></div>
          <div class="prr-r">会员卡</div>
        </div>
      </div>
      <div>
        <div class="prr1">
          <div><img src="@/assets/img/profile/shopping.svg" alt=""></div>
          <div class="prr-r">我的购物车</div>
        </div>
        <div class="prr1">
          <div><img src="@/assets/img/profile/application.svg" alt=""></div>
          <div class="prr-r">下载购物APP</div>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.prr-r{
  border-bottom: 1px solid rgb(239, 239, 239);
  width: 100%;
}

.prr1{
  display: flex;
  height: 44px;
  line-height: 44px;
}

.prr1 img{
  margin-left: 15px;
  margin-right: 10px;
  width: 20px;
  padding: 13px 0px;
}

.p-row2{
  border-bottom: 13px solid rgb(242, 242, 242);

}

.user-info{
  display: flex;
  font-size: 13px;
  text-align: center;
}

.ui-block{
  padding-top: 15px;
  width: 33%;
  height: 84px;
}

.user-info span{
  color: rgb(244, 143, 177);
  font-size: 22px;
}

.u-line2{
  font-size: 13px;
  display: flex;
  margin-left: -5px;
}

.u-line2 img{
  padding-top: 02px;
  height: 22px;
}

.u-line1{
  padding-top: 20px;
}

.user {
  color: white;
}

.user-detail{
  position: absolute;
  right: 0px;
  line-height: 85px;
}

.user-detail img{
  margin-right: 15px;
  width: 12px;
  transform: rotateY(180deg);
  color: white;
}

.face img {
  margin: 10px 15px ;
  width: 60px;
  color: rgb(220, 220, 220);
  background-color: white;
  border-radius: 50%;
  padding: 6px 3px 0px;
}

.login {
  display: flex;
  height: 85px;
  background-color: rgb(244, 143, 177);
}

.p-row1 {
  position: relative;
  width: 100%;
  height: 182px;
  border-bottom: 13px solid rgb(242, 242, 242);
}

.v-toolbar__title {
  color: white;
  font-size: 16px !important;
  font-weight: bold;
}
</style>