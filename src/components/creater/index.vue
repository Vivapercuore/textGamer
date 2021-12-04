<script setup lang="ts">
import _ from "lodash";
import { reactive, computed, ref } from "vue";
import { RadioCreaterItem, BaseInfoType } from "src/scenario/types/interface";
import store from "src/store";
import Radio from "./radio.vue";
import Text from "./text.vue";
import Checkbox from "./checkbox.vue";

const props = defineProps<{
  creater: [RadioCreaterItem];
  baseAttr: BaseInfoType;
}>();
const createrData = reactive([]);

const costLeft = ref(props.baseAttr.cost);
/**
 * 合并属性
 * 发送到store显示
 */
const setPlayerData = function () {
  let baseAttr = _.cloneDeep(props.baseAttr);
  let playerData = _.assign({ flags: [], attr: {} }, baseAttr);
  let baseCost = baseAttr.cost;

  createrData.forEach((gourupData) => {
    if (_.isArray(gourupData)) {
      gourupData.forEach((gourupItem) => {
        [playerData, baseCost] = attAssign(playerData, gourupItem, baseCost);
      });
    }
    [playerData, baseCost] = attAssign(playerData, gourupData, baseCost);
  });
  costLeft.value = baseCost;
  store.dispatch("setPlayerData", { ...playerData });
};

const attAssign = function (playerData, assignData, leftCost) {
  const { flagAdd, flagDelete, attrSet, attrAdd, attrReduce, cost } =
    assignData;
  //删除flag
  if (!_.isEmpty(flagDelete)) {
    _.pull(playerData.flags, ...flagDelete);
  }
  //添加flag
  if (!_.isEmpty(flagAdd)) {
    playerData.flags.push(...flagAdd);
  }
  //设置属性
  for (const key in attrSet) {
    if (Object.prototype.hasOwnProperty.call(attrSet, key)) {
      const value = attrSet[key];
      playerData.attr[key] = value;
    }
  }
  //增加属性
  for (const key in attrAdd) {
    if (Object.prototype.hasOwnProperty.call(attrAdd, key)) {
      const value = attrAdd[key];
      playerData.attr[key] = _.defaultTo(playerData.attr[key], 0);
      playerData.attr[key] += value;
    }
  }
  //减少属性
  for (const key in attrReduce) {
    if (Object.prototype.hasOwnProperty.call(attrReduce, key)) {
      const value = attrReduce[key];
      playerData.attr[key] = _.defaultTo(playerData.attr[key], 0);
      playerData.attr[key] -= value;
    }
  }
  if (cost) {
    leftCost -= cost;
  }
  return [playerData, leftCost];
};

const changeData = (index, data) => {
  createrData[index] = data;
  setPlayerData();
};
//tode:在剧本选择的action中完成关联动作
//初始化数据,从baseattr中合并数据
setPlayerData();
//检测是否完成了
const createComplete = computed(() => {
  return props.creater.every((createrGourp, index) => {
    const data = createrData[index];
    return !_.isEmpty(data);
  });
});

//进入下辈子
const goLife = () => {};
</script>

<template>
  <el-affix :offset="80">
    <el-card type="primary">剩余点数:{{ costLeft }}</el-card>
  </el-affix>

  <div v-for="(createrItem, index) in props.creater">
    <Radio
      v-if="createrItem.type === 'radio'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
    <Checkbox
      v-if="createrItem.type === 'checkbox'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
    <Text
      v-if="createrItem.type === 'text'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
  </div>

  <div>
    <el-row>
      <el-col :span="24" class="btn">
        <el-button class="big" type="primary" @click="goLife"
          >看看这辈子过的怎么样{{ createComplete }}</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.big {
  width: 200px;
  height: 50px;
}
</style>
