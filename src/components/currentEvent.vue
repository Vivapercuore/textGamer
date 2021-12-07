<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";

const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

let currentEvent = ref({});

const chooseAction = (chooseEvent, chooseBtn) => {
  const historyAction = _.cloneDeep(chooseEvent);
  historyAction.choosen = chooseBtn;
  store.dispatch("newActionHistory", historyAction);
  getNextEvent();
};

const getNextEvent = async () => {
  const event = await store.dispatch("getNewEvent");
  currentEvent.value = event;
};

await getNextEvent();
</script>

<template>
  <el-card class="currentEvent">
    <el-row :gutter="20">
      <el-col :span="24">
        <div>{{ currentEvent?.text }}</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-if="currentEvent?.options?.length">
      <el-col :span="24" class="operation">
        <el-button
          class="optionsBtn"
          v-for="btn in currentEvent.options"
          @click="chooseAction(currentEvent, btn.label)"
          type="primary"
          >{{ btn.label }}</el-button
        >
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped lang="less">
.currentEvent {
  margin: 20px;
}
.operation {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.optionsBtn {
  margin: 5px 0;
}
</style>
