<script setup>
import { inject } from 'vue'

const userInfo = inject('userInfo')
</script>

<template>
  <div class="border p-4">
    <div>Student Component</div>

    <div>
      <h1>{{ userInfo.name }}</h1>
      <h1>{{ userInfo.age }}</h1>
    </div>
  </div>
</template>
