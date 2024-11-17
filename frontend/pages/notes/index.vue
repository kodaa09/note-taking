<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>

<template>
  <div class="md:hidden">
    <h2 class="mb-4 text-xl">All Notes</h2>
  </div>
  <div class="flex gap-4 h-full">
    <div class="md:w-4/12 md:border-r border-gray-200 overflow-scroll md:px-4 md:pt-4">
      <div class="bg-gray-100 border border-gray-200 rounded-lg p-2" v-if="true">
        <p>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</p>
      </div>
    </div>
    <AddNoteForm class="w-8/12 mt-4 hidden md:block"/>
  </div>
</template>

<style scoped>

</style>
