<template>
  <v-container fluid class="detail">
    <v-row dense>
      <v-col
          class="col-detail"
          v-for="(item, index) in detail"
          :key="index"
          cols="6"
          @click="itemClick(item.iid)">
        <v-card class="card-detail" elevation="0">
          <v-img
              :src="item.show.img"
              :lazy-src="defaultImage"
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
            <v-card-text class='text-detail' v-text="item.props[0]"></v-card-text>
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
</template>

<script>
export default {
  name: "DetailItem",
  data() {
    return {
      defaultImage: require('@/assets/img/common/placeholder.png')
    }
  },
  props: {
    detail: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(iid) {
      console.log(iid)
      this.$router.push({path: '/detail', query: {iid}})
    }
  }
}
</script>

<style scoped>
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