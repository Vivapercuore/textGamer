<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";

const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

// const count = ref(0);

const getDescribe = hisData => {
  const { choosen, options } = hisData;
  const choosenOption = options.find(option => option.label === choosen);
  let describe = choosenOption?.choosenText;
  return describe;
};
const getLabel = hisData => {
  const { choosen, options } = hisData;
  const choosenOption = options.find(option => option.label === choosen);
  let label = choosenOption?.label;
  return label;
};
</script>

<template>
  <el-row :gutter="20" v-for="(item, index) in store?.state?.game?.historyActions">
    <el-col :span="24">
      <el-card class="box-card">
        <div class="event">{{ item.text }}</div>
        <div class="eventRes" v-if="getLabel(item)">{{ getLabel(item) }}</div>
        <div class="eventRes" v-if="getDescribe(item)">{{ getDescribe(item) }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.event {
}
.eventRes {
  font-size: 12px;
  color: #6e6e6e;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
