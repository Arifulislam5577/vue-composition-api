<script setup>
import { useCounter } from '@/composable/useCounter'

const { count, increment, decrement } = useCounter(0)
</script>

<template>
  <div>
    <h1>{{ count }}</h1>

    <button class="btn" @click="increment">Increment</button>
    <button class="btn" @click="decrement">Decrement</button>
  </div>
</template>
