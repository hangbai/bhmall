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
  name: "DetailBackTop",
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
      this.$emit('back-top',{goodShow:true,paramsShow:true,rateShow:true})
    }
  }
}
</script>

<style scoped>
.v-btn--fixed {
  bottom: 76px;
}
.back-top{
  padding: 0;
}
</style>