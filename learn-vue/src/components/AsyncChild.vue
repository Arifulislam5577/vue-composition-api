<template>
  <div>
    <ul v-for="number in numbers" :key="number">
      <li class="px-3 py-2 bg-gray-100 mb-2">{{ number }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</script>
