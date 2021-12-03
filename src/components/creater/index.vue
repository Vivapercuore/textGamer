<script setup lang="ts">
import { ref } from "vue";
import { CreaterList } from "src/scenario/types/interface";
import Radio from "./radio.vue";

const props = defineProps<{ creater: [CreaterItem] }>();
console.log(props.creater);
const count = ref(0);
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div v-for="createrItem in props.creater">
    <Radio v-if="createrItem.type === 'radio'" :createrItem="createrItem" />
  </div>
</template>

<style scoped>
</style>
