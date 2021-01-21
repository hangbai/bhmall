<template>
  <div id="category-detail">
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
</template>

<script>
export default {
  name: "CategoryDetail"
}
</script>

<style scoped>

</style>