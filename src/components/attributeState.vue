<script setup lang="ts">
import _ from "lodash";
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import store from "src/store";

// defineProps<{ msg: string  }>()
</script>

<template>
  <el-card class="box-card">
    <!-- 属性表 -->
    <el-descriptions title="角色属性" :column="1">
      <el-descriptions-item
        v-for="(value, attr) in store.state.player.attr"
        :key="attr + value"
        :label="attr"
        >{{ value }}</el-descriptions-item
      >
    </el-descriptions>
    <!-- flags -->
    <el-tag
      v-for="(flag, index) in store.state.player.flags"
      :key="index"
      class="flags"
      >{{ flag }}
    </el-tag>
  </el-card>
</template>

<style scoped lang="less">
.flags {
  margin: 0 5px;
}
</style>
