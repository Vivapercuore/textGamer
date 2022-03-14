<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";

// const instance = getCurrentInstance();
// defineProps<{ msg: string  }>()

// const count = ref(0);
</script>

<template>
  <div class="foot">
    <!-- <a class="link" href="https://github.com/Vivapercuore/textGamer">github</a>
    <span class="author">作者:vivapercuore</span>
    <span class="qq">QQ:986887506</span>
    <a
      class="link"
      href="https://github.com/Vivapercuore/textGamerIO/blob/main/README.md"
    >
      说明
    </a> -->
  </div>
</template>

<style scoped lang="less">
.foot {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.link {
  &:link,
  &:visited,
  &:active,
  &:hover {
    color: #a8a8a8;
  }
}
.author {
  font-size: 10px;
  color: #a8a8a8;
}
.qq {
  font-size: 10px;
  color: #d8d8d8;
}
</style>
