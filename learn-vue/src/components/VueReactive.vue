<template>
  <section>
    <h1 class="text-3xl font-bold underline">Vue Reactive</h1>

    <div class="mt-4">
      <h1 class="text-3xl font-bold underline">Count: {{ count.count }}</h1>
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
import { reactive } from 'vue'
const count = reactive({ count: 0 })

const IncrementCount = () => count.count++
const DecrementCount = () => count.count--
</script>

<!-- VUE REACTIVE FUNCTION STORE ONLY REFERENCE DATA TYPE -->
