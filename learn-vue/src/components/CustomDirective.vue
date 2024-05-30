<template>
  <div>
    <div v-style-div>Custom Directive</div>
  </div>
</template>
<script setup>
const vStyleDiv = {
  mounted: (el) => {
    el.style.color = 'red'
    el.style.background = '#eee'
    el.style.padding = '10px'
  }
}
</script>
