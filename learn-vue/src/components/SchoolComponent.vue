<script setup>
import StudentComponent from './StudentComponent.vue'
</script>

<template>
  <div>School Component</div>

  <StudentComponent />
</template>

<!-- <script setup>
import { provide } from 'vue'
import SchoolComponent from './components/SchoolComponent.vue'

const userInfo = {
  name: 'John Doe',
  age: 20
}

provide('userInfo', userInfo)
</script>

<template>
  <main class="py-20 max-w-xl mx-auto">
    <SchoolComponent />
  </main>
</template> -->
