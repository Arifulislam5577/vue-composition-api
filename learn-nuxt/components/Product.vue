<template>
  <article
    class="p-5 bg-white flex flex-col items-center justify-center rounded-xl"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.title" class="h-20" />
    </NuxtLink>
    <div class="product-description mt-5 text-center">
      <NuxtLink :to="`/products/${product.id}`">
        <h2
          class="font-medium text-sm text-slate-900 hover:text-slate-700 transition-all max-w-[250px]"
        >
          {{ product.title }}
        </h2>
      </NuxtLink>

      <h3 class="text-slate-900 my-5">${{ product.price }}</h3>
      <button
        class="bg-gray-200 py-2 px-4 hover:bg-slate-900 transition-all hover:text-gray-50 rounded-md border-none text-slate-900 hover:scale-90"
      >
        Add to cart
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps(["product"]);
</script>
