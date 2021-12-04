<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";

const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()
console.log(store.state?.player?.name);
// const count = ref(0);
</script>

<template>
  <el-container class="page">
    <el-header>
      <div class="header">
        好日子都在下辈子 <span class="version">v0.01</span>
      </div>
    </el-header>
    <el-main>
      <h1>剧本:{{}}</h1>
      <el-row :gutter="20" v-for="(item, index) in new Array(500).fill(1)">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
          >item{{ index }}
        </el-col>
      </el-row>
    </el-main>
    <el-footer>github,qqGourp,andsoon</el-footer>
  </el-container>
</template>

<style scoped lang="less">
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
