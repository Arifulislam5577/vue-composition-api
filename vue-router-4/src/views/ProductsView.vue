<template>
  <main class="max-w-7xl mx-auto py-12">
    <div class="py-10">
      <h1>Products</h1>
    </div>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else-if="data" class="grid grid-cols-4 gap-5">
      <ProductView v-for="product in data" :key="product.id" :product="product"></ProductView>
    </div>
  </main>
</template>

<script setup>
import useFetch from '../composable/useFetch'
import ProductView from '../components/ProductView.vue'

const { data, loading, error } = useFetch('https://fakestoreapi.com/products')
</script>
