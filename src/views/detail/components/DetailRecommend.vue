<template>
  <div id="detail-recommend">
    <div class="r-title">热门推荐</div>
    <div>
      <v-container fluid class="detail">
        <v-row dense>
          <v-col
              class="col-detail"
              v-for="(item, index) in recommend"
              :key="index"
              cols="6">
            <v-card class="card-detail" elevation="0">
              <v-img
                  :src="item.image"
                  :lazy-src="defaultImage"
                  transition="scale-transition"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <div class="info-detail">
              <v-row class="row-detail">
                <v-card-text class='text-detail' v-text="item.title"></v-card-text>
              </v-row>
              <v-row class="row-detail">
                <v-card-text class='price-detail'>
                  ￥{{ item.price }}
                  <v-icon class="icon-detail">mdi-star</v-icon>
                  {{ item.cfav }}
                </v-card-text>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  data() {
    return {
      defaultImage: require('@/assets/img/common/placeholder.png')
    }
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.r-title{
  padding-left: 14px;
  padding-top: 12px;
}

.col-detail {
  position: relative;
  overflow: hidden;
}

.card-detail {
  padding-top: 5px;
  padding-bottom: 30px;
}

.info-detail {
  position: absolute;
  bottom: 0px;
  width: 100%;
}

.text-detail {
  font-size: 12px;
  line-height: 12px;
  padding: 4px 0px 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row-detail {
  margin: 0;
  height: 16px;
}

.price-detail {
  font-size: 11px;
  padding: 0px;
  color: #F48FB1;
  text-align: center;
}

.icon-detail {
  font-size: 13px;
  color: #F48FB1;
  padding-left: 10px;
  padding-bottom: 2px;
}
</style>