<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()

const onClick = () => {
    counter.increment()
}
</script>

<template>
  <button @click="onClick">
    Click Counter: {{ counter.count }}
  </button>
</template>