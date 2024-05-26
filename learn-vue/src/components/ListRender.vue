<template>
  <div>List Render</div>

  <div
    v-for="product in products"
    :key="product.id"
    class="p-4 border border-gray-100 bg-gray-50 mb-2"
  >
    <div>
      <h1>{{ product.name }}</h1>
      <h1>${{ product.price }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
  { id: 5, name: 'Product 5', price: 500 }
])
</script>
