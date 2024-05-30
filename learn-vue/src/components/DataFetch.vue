<template>
  <div>
    <h1 class="mb-4">Fetch Data</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="message">{{ message }}</div>
    <div v-else>
      <ul>
        <li class="px-3 py-2 mb-1 bg-gray-100 rounded" v-for="item in data" :key="item.id">
          {{ item.id }}. {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const data = ref([])

const loading = ref(false)
const message = ref('')

const fetchData = async () => {
  try {
    loading.value = true
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json()

    if (res.ok) {
      data.value = json
    }
    loading.value = false
  } catch (error) {
    loading.value = false
    message.value = error.message
  } finally {
    loading.value = false
    message.value = ''
  }
}

onMounted(() => {
  fetchData()
})
</script>
