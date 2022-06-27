<script setup>
import { ref } from 'vue'
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style lang="less">
@color-base: #2d5e8b;

h1 {
  color: @color-base;
}
</style>