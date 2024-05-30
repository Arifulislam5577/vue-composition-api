<template>
  <div class="py-12 max-w-7xl mx-auto">
    <Loader v-if="loading" />
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="lg:col-span-2 w-full">
        <NuxtLink
          to="/products"
          class="px-5 py-2 bg-slate-900 text-white rounded text-sm"
          >Go Back</NuxtLink
        >
      </div>
      <div class="lg:col-span-1 w-full">
        <img
          :src="product?.image"
          class="h-96 w-full object-contain"
          :alt="product?.title"
        />
      </div>
      <div class="lg:col-span-1 w-full">
        <h1 class="text-xl font-bold">{{ product?.title }}</h1>
        <p class="text-gray-500 my-5">{{ product?.description }}</p>
        <h3 class="text-slate-700 font-bold mb-5">
          Rating - {{ product?.rating?.rate }} from
          {{ product?.rating?.count }} reviews
        </h3>
        <h3 class="text-slate-700 font-bold mb-5">
          Price - ${{ product?.price }}
        </h3>

        <button
          className="p-3 px-6 text-sm rounded bg-slate-900 text-gray-50 hover:bg-slate-800 uppercase transition-all"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.productId}`
);
</script>
