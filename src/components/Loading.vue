<template>
  <div class="text-center">
    <v-progress-circular
        size="24"
        width="2"
        indeterminate
        color="#F48FB1"
    ></v-progress-circular>
    <span class="loading-text">加载中</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loading-text{
  padding-left: 15px;
  line-height: 40px;
}
</style>