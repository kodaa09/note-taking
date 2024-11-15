<script setup lang="ts">
defineProps({
  message: {
    type: [String, null],
    default: null
  }
})
</script>

<template>
  <p class="text-sm text-red-800" v-if="message !== ''">{{ message }}</p>
</template>
