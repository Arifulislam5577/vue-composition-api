<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-slate-900 py-3 px-6 text-white">
    <div class="container mx-auto flex justify-between">
      <p>Vue Router</p>

      <ul class="flex gap-3">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/blogs">Blogs</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
