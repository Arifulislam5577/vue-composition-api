<template>
  <main class="max-w-7xl mx-auto py-12">
    <p v-if="pending">Loading...</p>
    <div v-else class="grid grid-cols-4 gap-5">
      <Product v-for="product in data" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<script setup lang="ts">
const { data, pending } = await useLazyFetch(
  "https://fakestoreapi.com/products"
);
</script>
