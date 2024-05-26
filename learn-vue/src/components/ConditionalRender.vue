<template>
  <section>
    <h1 v-show="visible" class="text-3xl font-bold underline">Conditional Rendering</h1>
    <button @click="visible = !visible">Toggle</button>

    <div class="mt-4">
      <h1 class="text-3xl font-bold">{{ count }}</h1>
      <p v-if="count === 0">Number Is Zero</p>
      <p v-else-if="(count % 2 === 0) & (count > 0)">Even Number</p>
      <p v-else-if="count % 2 === 1">Odd Number</p>
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
import { ref } from 'vue'
const count = ref(0)
const visible = ref(true)

const IncrementCount = () => count.value++
const DecrementCount = () => count.value--
</script>
