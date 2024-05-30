<template>
  <slot>
    <h1 class="text-center font-bold pb-3 border-b my-3 text-2xl">Component Slot</h1>
  </slot>

  <slot name="one"></slot>
  <slot name="two"></slot>
</template>
<script setup></script>
