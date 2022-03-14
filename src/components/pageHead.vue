<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";

// const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

// const count = ref(0);
</script>

<template>
  <div class="header">
    chat <span class="version">v{{ store.state.version }}</span>
  </div>
</template>

<style scoped lang="less">
.header {
  text-align: center;

  font-size: 30px;
}
.version {
  font-size: 15px;
}
</style>
