<template>
  <div v-if="showComponent">
    <AsyncChild />
  </div>

  <button class="btn" @click="handleToggler">Toggler</button>
</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue'
const AsyncChild = defineAsyncComponent(() => import('./AsyncChild.vue'))

const showComponent = ref(false)

const handleToggler = () => {
  showComponent.value = !showComponent.value
}
</script>
