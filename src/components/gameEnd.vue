<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";
import router from "src/router";

// const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

// const count = ref(0);
const end = store.state.game.end;

let viewdom = ref(null);

const goHome = () => {
  router.push({ name: "HelloWorld" });
};
const again = () => {
  const scenarioItem = router.push({
    name: "create",
    params: { scenarioName: scenarioItem }
  });
};

console.log("end");
setTimeout(() => {
  //滑动到当前位置
  viewdom?.value?.scrollIntoView?.({
    behavior: "smooth",
    block: "start",
    inline: "center"
  });
}, 500);
</script>

<template>
  <h1 class="gameEnd" ref="viewdom">游戏结束</h1>

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

  <el-row :gutter="20">
    <el-col :span="24">
      <div class="bnts">
        <el-button type="primary" plain @click="goHome">回到首页</el-button>
        <el-button type="primary" plain @click="again">再来一把</el-button>
      </div>
    </el-col>
  </el-row>
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
.bnts {
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>