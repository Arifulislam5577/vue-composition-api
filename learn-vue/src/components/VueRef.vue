<template>
  <section>
    <h1 class="text-3xl font-bold underline">{{ count }}</h1>

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
  </section>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

const IncrementCount = () => count.value++
const DecrementCount = () => count.value--
</script>

<!-- VUE REF CAN STORE ANY DATA TYPE -->
