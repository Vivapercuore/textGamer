<script setup lang="ts">
import _ from "lodash";
import { ref, computed, reactive } from "vue";
import store from "src/store";
import scenario from "src/scenario/index";

// defineProps<{ msg: string  }>()

const currentScenario = scenario[store.state.scenario.scenarioName];
/**
 * 获取描述
 */
const getPropertie = (attr, value) => {
  const ranges = currentScenario?.properties?.[attr];
  if (ranges) {
    const inRanges = ranges.filter((range) => {
      return _.inRange(value, ...range.range);
    });
    const randomIndex = _.random(0, inRanges.length - 1);
    return inRanges?.[randomIndex]?.desc;
  }
};
</script>

<template>
  <el-card class="box-card">
    <!-- 属性表 -->
    <el-descriptions title="角色属性" :column="1">
      <el-descriptions-item
        v-for="(value, attr) in store.state.player.attr"
        :key="attr + value"
        :label="attr"
        >{{ value
        }}<span class="propertie">{{ getPropertie(attr, value) }}</span>
      </el-descriptions-item>
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
.propertie {
  margin-left: 15px;
  font-size: 12px;
  color: #6e6e6e;
}
</style>
