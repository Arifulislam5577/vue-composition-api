<template>
  <div>
    <h1>Counter : {{ counter }}</h1>

    <button class="btn" @click="decrement">Decrement</button>
    <button class="btn" @click="increment">Increment</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const counter = ref(10)

const increment = () => {
  counter.value++
}

const decrement = () => {
  counter.value--
}

defineExpose({
  counter,
  increment,
  decrement
})
</script>
