<template>
  <div class="p-4 border border-gray-100 bg-gray-50 mb-2">
    <div>
      <h1>{{ product.name }}</h1>
      <h1>${{ product.price }}</h1>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>
