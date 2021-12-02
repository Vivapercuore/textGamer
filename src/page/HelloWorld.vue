<script setup lang="ts">
import { ref ,reactive } from 'vue'

import scenario from "src/scenario/index"

// defineProps<{ msg: string  }>()

const scenarioMap = ref(scenario) as Ref<State>;
console.log(scenarioMap.value);
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <h1>
    选择你要游玩的剧本:
  </h1>
  <div v-for="(scenarioItemData, scenarioItem) in scenarioMap">
  {{scenarioItemData.name}}
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
