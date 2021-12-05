<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";
import scenario from "src/scenario/index";
import PageHead from "src/components/pageHead.vue";
import PageFoot from "src/components/pageFoot.vue";
import AttributeState from "src/components/attributeState.vue";
import HisAction from "src/components/hisAction.vue";
import CurrentEvent from "src/components/currentEvent.vue";
import GameEnd from "src/components/gameEnd.vue";

//初始化时回到顶部
window.scrollTo(0, 0);
// const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()
const currentScenario = scenario[store.state?.scenario?.scenarioName];
//无数据返回
// if (!currentScenario) {
//   router.push({ name: "HelloWorld" });
// }

// 新决策时回到屏幕中
// element.scrollIntoView();
// const count = ref(0);

const showEnd = computed(() => {
  console.log(store.state?.game?.end);
  return !_.isEmpty(store.state?.game?.end);
});
</script>

<template>
  <el-container class="page">
    <el-header>
      <PageHead />
    </el-header>
    <el-main>
      <div class="content">
        <h1>剧本:{{ currentScenario?.name }}</h1>
        <el-affix target=".content">
          <AttributeState />
        </el-affix>
        <HisAction />
        <CurrentEvent v-if="!showEnd" />
        <GameEnd v-if="showEnd" />
      </div>
    </el-main>
    <el-footer><PageFoot /></el-footer>
  </el-container>
</template>

<style scoped lang="less">
@import (reference) "src/theme/theme.less";
.page {
  min-height: 100vh;

  background-color: @pagebackground;
}
.content {
  // max-height: 100vh;
}
.scenarioItem {
  .text();
}

:deep(.el-main) {
  overflow: visible;
}
</style>
