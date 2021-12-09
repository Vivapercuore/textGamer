<script setup lang="ts">
import _ from "lodash";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import router from "src/router";
import store from "src/store";
import Creater from "src/components/creater/index.vue";
import AttributeState from "src/components/attributeState.vue";
import scenario from "src/scenario/index";
import PageHead from "src/components/pageHead.vue";
import PageFoot from "src/components/pageFoot.vue";

//检查是否是正确的剧本
if (
  router?.currentRoute?.value?.params?.scenarioName !==
    store?.state?.scenario?.scenarioName &&
  router?.currentRoute?.value?.params?.scenarioName
) {
  store.dispatch(
    "changeScenario",
    router?.currentRoute?.value?.params?.scenarioName
  );
}
if (
  !router?.currentRoute?.value?.params?.scenarioName &&
  !store?.state?.scenario?.scenarioName
) {
  router.push({ name: "HelloWorld" });
}

const currentScenario = scenario[store.state?.scenario?.scenarioName];
if (!currentScenario) {
  router.push({ name: "HelloWorld" });
}
const { creater, baseAttr, startBtnLable } = currentScenario;
// defineProps<{ msg: string  }>()

// const count = ref(0);
</script>

<template>
  <el-container class="page">
    <el-header>
      <PageHead />
    </el-header>
    <el-main>
      <h1 class="title">{{ currentScenario.name }}</h1>
      <Creater :creater="creater" :baseAttr="baseAttr" :startBtnLable="startBtnLable" />
      <AttributeState />
    </el-main>
    <el-footer>
      <PageFoot />
    </el-footer>
  </el-container>
</template>
<style lang="less" scoped>
@import (reference) "src/theme/theme.less";
.page {
  min-height: 100vh;

  background-color: @pagebackground;
}
.title {
  text-align: center;
}

:deep(.el-main) {
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
