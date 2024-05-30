<template>
  <h1 class="text-center font-bold pb-3 border-b my-3 text-2xl">Component Events</h1>
  <div class="mt-4">
    <ComChildEvent @handleSubmit="handleSubmit" />
  </div>
</template>
<script setup>
import ComChildEvent from './ComChildEvent.vue'

const handleSubmit = (value) => {
  console.log(value)
}
</script>
