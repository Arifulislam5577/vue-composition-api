<template>
  <div>
    {{ loading }}

    {{ data }}
    {{ error }}
  </div>
</template>
<script setup>
import { useFetch } from '@/composable/useFetch'
const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos')
</script>
