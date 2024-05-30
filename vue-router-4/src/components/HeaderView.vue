<template>
  <header class="py-5 bg-slate-900">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <RouterLink to="/" class="text-xl font-bold text-white">Vue Router</RouterLink>
      <ul class="flex items-center gap-3">
        <RouterLink to="/" class="text-white">Home</RouterLink>
        <RouterLink to="/about" class="text-white">About</RouterLink>
        <RouterLink to="/products" class="text-white">Products</RouterLink>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
