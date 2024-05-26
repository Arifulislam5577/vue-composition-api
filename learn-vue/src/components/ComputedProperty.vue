<template>
  <section>
    <h1 class="text-3xl font-bold underline">Computed Property</h1>

    <div class="mt-4">
      <h1 class="text-3xl font-bold">Count: {{ count }}</h1>
      <h1 class="text-3xl font-bold">Square Count: {{ squaredCount }}</h1>
      <div class="flex gap-3">
        <button
          @click="IncrementCount"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Increment
        </button>
        <button
          @click="DecrementCount"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Decrement
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const count = ref(0)

const IncrementCount = () => count.value++
const DecrementCount = () => count.value--
const squaredCount = computed(() => count.value * 2)
</script>
