<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";

const instance = getCurrentInstance();
const input = (value: tring) => {
  if (!value) {
    return;
  }
  const selectData = {
    attrSet: {
      //设置属性
      [props.createrItem.values.attrName]: value,
    },
  };
  //   instance.emit("change", selectData);
  instance.emit("changeData", selectData);
};
const props = defineProps<{ createrItem: RadioCreaterItem }>();
const formData = ref();

// const count = ref(0);
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="24"> {{ props.createrItem.groupName }}: </el-col>
    </el-row>

    <el-row class="container">
      <el-input
        class="content"
        @input="input"
        v-model="formData"
        :placeholder="props.createrItem.values.info"
      >
      </el-input>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.container {
  margin: 10px;
}
</style>
