<script setup lang="ts">
import _ from "lodash";
import { reactive, computed, ref } from "vue";
import { RadioCreaterItem, BaseInfoType } from "src/scenario/types/interface";
import router from "src/router";
import store from "src/store";
import Radio from "./radio.vue";
import Text from "./text.vue";
import Number from "./number.vue";
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
        [playerData, baseCost] = attrAssign(playerData, gourupItem, baseCost);
      });
    }
    [playerData, baseCost] = attrAssign(playerData, gourupData, baseCost);
  });
  costLeft.value = baseCost;
  store.dispatch("setPlayerData", { ...playerData });
};

const attrAssign = function (playerData, assignData, leftCost) {
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

//校验所有必需选项
const createComplete = () => {
  return props.creater.every((createrGourp, index) => {
    if (createrGourp.require) {
      const data = createrData[index];
      const verify = !_.isEmpty(data);
      if (!verify) {
        throw createrGourp.groupName;
      }
      return verify;
    } else {
      return true;
    }
  });
};

//进入下辈子
const goLife = () => {
  //require的校验项
  try {
    const verify = createComplete();
    if (costLeft.value < 0) {
      ElNotification({
        title: "点数不够用啊",
        message: `剩余点数不够用啊`,
        type: "error",
      });
    } else if (costLeft.value > 0) {
      ElMessageBox.confirm("你点数还有剩的哦,真的就这样么??", "Warning", {
        confirmButtonText: "老子乐意",
        cancelButtonText: "等我花光",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "大兄弟牛逼啊",
          });
          startGame();
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "好嘞,等你",
          });
        });
    } else {
      startGame();
    }
  } catch (error) {
    ElNotification({
      title: "少选了东西啊",
      message: `${error},是必填/必选项`,
      type: "error",
    });
  }
};

/**
 * 开始游戏
 */
const startGame = () => {
  store.dispatch("startGame");
  router.push({ name: "play" });
};
</script>

<template>
  <div class="sticky">
    <el-card type="primary">剩余点数:{{ costLeft }}</el-card>
  </div>

  <div v-for="(createrItem, index) in props.creater">
    <Radio
      v-if="createrItem.type === '单选器'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
    <Checkbox
      v-if="createrItem.type === '多选器'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
    <Text
      v-if="createrItem.type === '文本输入'"
      :createrItem="createrItem"
      @changeData="
        (data) => {
          changeData(index, data);
        }
      "
    />
    <Number
      v-if="createrItem.type === '数据调整'"
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
          >看看这辈子过的怎么样</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 5;
}
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
