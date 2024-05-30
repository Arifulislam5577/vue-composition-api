<template>
  <header class="bg-slate-900 py-3 px-6 text-white">
    <slot name="header"></slot>
  </header>

  <footer class="bg-gray-100 py-10 px-6">
    <slot name="footer"></slot>
  </footer>
</template>

<script setup></script>

<!-- APP -->

<!-- 
<script setup>
import NamedSlot from './components/NamedSlot.vue'
</script>

<template>
  <main class="py-20 max-w-xl mx-auto">
    <NamedSlot>
      <template v-slot:header>
        <div>Header</div>
      </template>
      <template v-slot:footer>
        <div>Footer</div>
      </template>
    </NamedSlot>
  </main>
</template> -->
