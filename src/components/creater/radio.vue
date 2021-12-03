<script setup lang="ts">
import _ from "lodash";
import { ref, computed } from "vue";
import { CreaterList } from "src/scenario/types/interface";

const props = defineProps<{ createrItem: CreaterItem }>();
console.log(props.createrItem);
const select = (data) => {
  console.log("select", data);
};
const formData = ref();
const hideAttr = computed(() => {
  console.log("computed");
  return (
    _.isEmpty(props.createrItem.attrSet) &&
    _.isEmpty(props.createrItem.attrAdd) &&
    _.isEmpty(props.createrItem.attrReduce)
  );
});
</script>

<template>
  <div>
    <el-row>
      <el-col :span="24"> {{ props.createrItem.groupName }}: </el-col>
    </el-row>
    <el-row class="container">
      <el-radio-group class="content" @change="select" v-model="formData">
        <el-radio-button
          class="item"
          v-for="option in props.createrItem.values"
          :label="option.name"
        >
          <el-descriptions :title="option.name" :column="1">
            <el-descriptions-item
              v-if="option?.cost != undefined"
              :label="`${option.cost >= 0 ? '花费' : '增加'}点数:`"
              >{{ option.cost }}</el-descriptions-item
            >

            <el-descriptions-item v-if="option?.info" label="介绍:">{{
              option.info
            }}</el-descriptions-item>

            <el-descriptions-item v-if="!hideAttr" label="属性调整:">
              <span v-for="(attr, value) in option.attrSet">
                {{ attr }}设为{{ value }}
              </span>
              <span v-for="(attr, value) in option.attrAdd"></span>
              <span v-for="(attr, value) in option.attrReduce"></span>
            </el-descriptions-item>

            <el-descriptions-item
              v-if="option?.flagAdd?.length"
              label="增加标签:"
            >
              <el-tag v-for="flag in option.flagAdd" type="info">{{
                flag
              }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </el-radio-button>
      </el-radio-group>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
}
.item {
  margin: 5px;
  height: 100%;
}

:deep().el-descriptions__body {
  background: rgba(0, 0, 0, 0);
}
</style>
