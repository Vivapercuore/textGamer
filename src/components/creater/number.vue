<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed, getCurrentInstance } from "vue";
import store from "src/store";

const instance = getCurrentInstance();
const input = (value: tring) => {
  const selectData = {
    attrAdd: {
      //增加属性
    },
    attrReduce: {
      //减少属性
    },
    cost: 0,
  };
  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      const attrvalue = formData[key];
      if (attrvalue > 0) {
        selectData.attrAdd[key] = Math.abs(attrvalue);
        const option = props.createrItem.values.find(
          (item) => item.attrName === key
        );
        selectData.cost += attrvalue * option.cost;
      }
      if (attrvalue < 0) {
        selectData.attrReduce[key] = Math.abs(attrvalue);
        const option = props.createrItem.values.find(
          (item) => item.attrName === key
        );
        selectData.cost += attrvalue * option.cost;
      }
    }
  }
  //   instance.emit("change", selectData);
  instance.emit("changeData", selectData);
};

const props = defineProps<{ createrItem: RadioCreaterItem }>();
const playerAttr = _.cloneDeep(store.state.player.attr);
const formData = reactive(
  _.mapValues(playerAttr, () => {
    return 0;
  })
);
// const count = ref(0);
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="24"> {{ props.createrItem.groupName }}: </el-col>
    </el-row>
    <el-row class="content">
      <el-card v-for="option in props.createrItem.values" class="content-card">
        <div class="info">
          {{ option.attrName }}:
          <span class="decs">每点调整消耗/增加 {{ option.cost }}点 点数:</span>
        </div>
        <el-input-number
          v-model="formData[option.attrName]"
          :min="-option.maxModify"
          :max="option.maxModify"
          @change="input"
        />
        <div class="res">
          <span>
            <span>{{
              store.state.player.attr[option.attrName] -
              formData[option.attrName]
            }}</span>
            <span> -> </span>
            <span>{{ store.state.player.attr[option.attrName] }}</span>
          </span>
          <span>
            <span>点数:</span>
            <span
              :class="
                formData[option.attrName] * option.cost >= 0 ? 'reduce' : 'add'
              "
              >{{ formData[option.attrName] * option.cost >= 0 ? "" : "+" }}
            </span>
            <span
              :class="
                formData[option.attrName] * option.cost >= 0 ? 'reduce' : 'add'
              "
            >
              {{ -formData[option.attrName] * option.cost }}</span
            ></span
          >
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.container {
  margin: 10px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
}
.content-card {
  margin: 5px;
}
.info {
  margin-bottom: 5px;
}
.decs {
  margin-left: 5px;
  font-size: 12px;
  color: #6e6e6e;
}
.res {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.add {
  color: #67c23a;
}
.reduce {
  color: #f56c6c;
}
</style>
