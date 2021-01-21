<template>
  <div id="category-data">
    <v-container fluid class="detail">
      <v-row dense>
        <v-col
            class="col-detail"
            v-for="(item, index) in categoryData"
            :key="index"
            cols="4">
          <v-card class="card-detail" elevation="0">
            <v-img :src="item.image" transition="scale-transition"></v-img>
          </v-card>
          <div class="info-detail">
            <v-row class="row-detail">
              <v-card-text class='text-detail' v-text="item.title"></v-card-text>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CategoryMore",
  props: {
    categoryData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      defaultImage: require('@/assets/img/common/placeholder.png')
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
  padding: 8px 7px 28px;
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
  text-align: center;
  margin: 0;
  height: 16px;
}

</style>