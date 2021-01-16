<template>
  <v-card-text style="position: relative;" class="back-top">
    <v-fab-transition>
      <v-btn
          v-show="backTopShow"
          color="pink lighten-3"
          small
          dark
          fixed
          bottom
          right
          fab
          @click="backTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card-text>
</template>

<script>
export default {
  name: "BackTop",
  props:{
    backTopShow:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  methods:{
    backTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
      });
    }
  }
}
</script>

<style scoped>
.v-btn--fixed {
  bottom: 66px;
}
.back-top{
  padding: 0;
}
</style>