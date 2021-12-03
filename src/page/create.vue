<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import store from "src/store";
import Creater from "src/components/creater/index.vue";

const router = useRoute();
if (router?.params?.scenarioName !== store?.state?.scenario?.scenarioName) {
  store.dispatch("changeScenario", router.params.scenarioName);
}
const scenario = store.getters.currentScenario;
const { creater } = scenario;
console.log(store.getters.currentScenario);
// defineProps<{ msg: string  }>()

const count = ref(0);
</script>

<template>
  <el-container class="page">
    <el-main>
      <h1>{{ scenario.name }}</h1>
      <h2>创建角色</h2>
      <Creater :creater="creater" />
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
