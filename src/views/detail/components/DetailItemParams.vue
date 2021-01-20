<template>
  <div id="detail-params" class="item-params" v-if="itemParams">
    <table>
      <tr v-for="(itemRow,index) in itemParams.rule" :key="index">
        <td v-for="(itemCol,index) in itemRow" :key="index">{{ itemCol }}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(itemInfo,index) in itemParams.info" :key="index">
        <td class="info-left">{{ itemInfo.key }}</td>
        <td class="info-right">{{ itemInfo.value }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.info-left {
  width: 28%;
}

.info-right {
  color: rgb(235, 72, 104);
}

table {
  border-collapse: collapse;
  font-size: 14px;
  width: 100%;
  color: rgb(102, 102, 102);
}

tr, td {
  border-bottom: 1px solid rgb(239, 239, 239);
  height: 42px;

}

.item-params {
  padding: 19px 14px;
  border-bottom: 5px solid #f2f5f8;
}
</style>