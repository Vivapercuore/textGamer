<script setup lang="ts">
import _ from "lodash";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import store from "src/store";
import Creater from "src/components/creater/index.vue";
import AttributeState from "src/components/attributeState.vue";
import scenario from "src/scenario/index";

const router = useRoute();
if (router?.params?.scenarioName !== store?.state?.scenario?.scenarioName) {
  store.dispatch("changeScenario", router.params.scenarioName);
}
const currentScenario = scenario[store.state.scenario.scenarioName];
const { creater, baseAttr } = currentScenario;
// defineProps<{ msg: string  }>()

// const count = ref(0);
</script>

<template>
  <el-container class="page">
    <el-main>
      <h1>{{ scenario.name }}</h1>
      <h2>创建角色</h2>
      <Creater :creater="creater" :baseAttr="baseAttr" />
      <AttributeState />
    </el-main>
    <el-footer>github,qqGourp,andsoon</el-footer>
  </el-container>
</template>
<style lang="less" scoped>
@import (reference) "src/theme/theme.less";
.page {
  min-height: 100vh;

  background-color: @pagebackground;
}
</style>
