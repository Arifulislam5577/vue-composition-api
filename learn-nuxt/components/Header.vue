<template lang="">
  <header class="bg-gray-800 text-white py-4 px-6">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="text-3xl font-bold">Nuxt.js</NuxtLink>

      <nav>
        <ul class="flex space-x-4 items-center justify-between">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
