<template>
  <form @submit.prevent="$emit('handleSubmit', formData)">
    <div>
      <label for="name" class="text-left block">Name</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        placeholder="Enter Name"
        class="border px-4 py-2 w-full mt-1"
      />
    </div>
    <div>
      <label for="email" class="text-left block">Email</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        placeholder="Enter Email"
        class="border px-4 py-2 w-full mt-1"
      />
    </div>

    <button type="submit" class="btn">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: ''
})
</script>
