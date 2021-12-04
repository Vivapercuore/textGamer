<script setup lang="ts">
import { ref, reactive } from "vue";
import router from "src/router";
import store from "src/store";

import scenario from "src/scenario/index";

// defineProps<{ msg: string  }>()

const scenarioMap = ref(scenario) as Ref<State>;

const chooseScenario = (scenarioItem) => {
  store.dispatch("changeScenario", scenarioItem);
  router.push({ name: "create", params: { scenarioName: scenarioItem } });
};
</script>

<template>
  <el-container class="page">
    <el-header>
      <div class="header">
        好日子都在下辈子 <span class="version">v0.01</span>
      </div>
    </el-header>
    <el-main>
      <h1>选择你要游玩的剧本:</h1>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-card
            class="scenarioItem"
            @click="chooseScenario(scenarioItem)"
            v-for="(scenarioItemData, scenarioItem) in scenarioMap"
          >
            <el-descriptions :title="scenarioItemData.name">
              <el-descriptions-item label="描述：">{{
                scenarioItemData.info
              }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
      </el-row>
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
.header {
  text-align: center;

  font-size: 50px;
}
.version {
  font-size: 15px;
}

.scenarioItem {
  .text();
}

.el-descriptions__body {
  background-color: transparent;
}
</style>
