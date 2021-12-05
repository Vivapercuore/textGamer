<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";

// const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

// const count = ref(0);
const end = store.state.game.end;
</script>

<template>
  <h1 class="gameEnd">游戏结束</h1>

  <el-card class="currentEvent">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="title">{{ end?.title }}</div>
      </el-col>
      <el-col :span="24">
        <div class="text">{{ end?.text }}</div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped lang="less">
.gameEnd {
  text-align: center;
}
.title {
  font-size: 24px;
}
.text {
  font-size: 15px;
  color: #6e6e6e;
  margin-top: 10px;
  margin-left: 10px;
}
</style>