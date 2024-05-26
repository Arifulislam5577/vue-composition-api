<template>
  <div class="text-center font-bold pb-3 border-b my-3 text-2xl">V MODEL</div>

  <div class="text-center">{{ formData }}</div>

  <form @submit.prevent="handleSubmit" class="space-y-4 mt-4 p-6">
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
    <div>
      <label for="pass" class="text-left block">Password</label>
      <input
        type="password"
        id="pass"
        v-model="formData.pass"
        placeholder="Password"
        class="border px-4 py-2 w-full mt-1"
      />
    </div>

    <div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  pass: ''
})

const handleSubmit = () => {
  console.log(formData)
}
</script>
