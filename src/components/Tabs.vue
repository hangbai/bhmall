<template>
  <div>
    <v-tabs
        class="tab-fix"
        v-show="tabFixShow"
        v-model="tab"
        height="40px"
        fixed-tabs
        color="pink lighten-3">
      <v-tab v-for="item in tabs" :key="item.tab" @click="tabChange(item.type)">{{ item.tab }}</v-tab>
    </v-tabs>
    <v-tabs v-model="tab" height="40px" fixed-tabs color="pink lighten-3" class='Pop-Over' ref="tabPos">
      <v-tab v-for="item in tabs" :key="item.tab" @click="tabChange(item.type)">{{ item.tab }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabs" :key="item.tab">
        <detail-item :detail="details[item.type].list"/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>

import DetailItem from "@/components/DetailList";

export default {
  name: "Tabs",
  data() {
    return {
      tab: null,
      tabs: [{tab: '流行', type: 'pop'}, {tab: '新款', type: 'new'}, {tab: '精选', type: 'sell'}],
    }
  },
  components: {
    DetailItem
  },
  props: {
    tabFixShow:{
      type:Boolean,
      default() {
        return false;
      }
    },
    details: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    tabChange(type) {
      this.$emit('tabChange',type)
    },
  },
}
</script>

<style scoped>
.v-tab--active:before{
  background-color: white;
}

.tab-fix{
  position: fixed;
  top: 44px;
  z-index: 9;
}
</style>