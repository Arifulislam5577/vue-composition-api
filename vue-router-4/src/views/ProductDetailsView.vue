<template>
  <div class="max-w-7xl mx-auto py-12">
    <p>Product Details {{ $route.params.id }}</p>

    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import useFetch from '@/composable/useFetch'
import { useRoute } from 'vue-router'
const route = useRoute()

const { data, loading, error } = useFetch('https://fakestoreapi.com/products/' + route.params.id)

console.log({ data, loading, error })
</script>
