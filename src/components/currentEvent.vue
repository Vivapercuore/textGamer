<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";
import scenario from "src/scenario/index";

// const instance = getCurrentInstance();
defineProps<{ msg: string }>();

const currentScenario = scenario[store.state?.scenario?.scenarioName];
let currentEvent = ref({});

let viewdom = ref(null);

const chooseAction = (chooseEvent, chooseBtn) => {
  const historyAction = _.cloneDeep(chooseEvent);
  historyAction.choosen = chooseBtn;
  store.dispatch("newActionHistory", historyAction);
  getNextEvent();
};

const getNextEvent = async () => {
  const event = await store.dispatch("getNewEvent");
  currentEvent.value = event;
  scrollIntoView();
};
let scrollIntoViewRaf = null;
const scrollIntoView = () => {
  window.cancelAnimationFrame(scrollIntoViewRaf);
  scrollIntoViewRaf = window.requestAnimationFrame(() => {
    //滑动到当前位置
    viewdom?.value?.scrollIntoView?.({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
};
if (currentScenario) {
  await getNextEvent();
}
</script>

<template>
  <div ref="viewdom" class="view">
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
            v-for="btn in currentEvent?.options"
            @click="chooseAction(currentEvent, btn.label)"
            type="primary"
            >{{ btn.label }}</el-button
          >
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.view {
  margin-bottom: 20vh;
}
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
