<script setup lang="ts">
import _ from "lodash";
import { ref, getCurrentInstance } from "vue";
import { RadioCreaterItem } from "src/scenario/types/interface";

const instance = getCurrentInstance();
const props = defineProps<{ createrItem: RadioCreaterItem }>();
const select = (itemName) => {
  const selectData = props.createrItem.values.filter((item) =>
    itemName.includes(item.name)
  );
  instance.emit("change", selectData);
  instance.emit("changeData", selectData);
};
const formData = ref([]);
const hideAttr = (option) => {
  return (
    _.isEmpty(option.attrSet) &&
    _.isEmpty(option.attrAdd) &&
    _.isEmpty(option.attrReduce)
  );
};
</script>

<template>
  <div>
    <el-row>
      <el-col :span="24"> {{ props.createrItem.groupName }}: </el-col>
    </el-row>
    <el-row class="container">
      <el-checkbox-group class="content" @change="select" v-model="formData">
        <el-checkbox-button
          class="item"
          v-for="option in props.createrItem.values"
          :label="option.name"
        >
          <el-descriptions
            class="descriptions"
            :title="option.name"
            :column="1"
          >
            <el-descriptions-item
              v-if="option?.cost != undefined"
              :label="`${option.cost >= 0 ? '花费' : '增加'}点数:`"
            >
              <span :class="option.cost >= 0 ? 'attrReduce' : 'attrAdd'">
                {{ option.cost }}</span
              ></el-descriptions-item
            >

            <el-descriptions-item v-if="option?.info" label="介绍:">{{
              option.info
            }}</el-descriptions-item>

            <el-descriptions-item v-if="!hideAttr(option)" label="属性调整:">
              <div
                class="attrSet"
                v-for="(value, attr) in option.attrSet"
                :key="attr"
              >
                {{ attr }}设为{{ value }}
              </div>
              <div
                class="attrAdd"
                v-for="(value, attr) in option.attrAdd"
                :key="attr"
              >
                {{ attr }}增加{{ value }}
              </div>
              <div
                class="attrReduce"
                v-for="(value, attr) in option.attrReduce"
                :key="attr"
              >
                {{ attr }}减少{{ value }}
              </div>
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
        </el-checkbox-button>
      </el-checkbox-group>
    </el-row>
  </div>
</template>


<style scoped lang="less">
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

.descriptions {
  max-width: 200px;
}

:deep(.el-descriptions__body) {
  background: rgba(0, 0, 0, 0);
}

:deep(.el-checkbox-button.is-checked .el-checkbox-button__inner) {
  background: rgba(64, 160, 255, 0.2);
}

.attrText() {
  margin-left: 10px;
}
.attrSet {
  color: #387aff;
  .attrText();
}
.attrAdd {
  color: #67c23a;
  .attrText();
}
.attrReduce {
  color: #f56c6c;
  .attrText();
}
</style>