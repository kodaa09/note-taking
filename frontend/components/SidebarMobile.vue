<script setup lang="ts">

</script>

<template>
  <div class="py-2 mb-8 border-b border-gray-200">
    <UButton
        class="fixed bottom-[100px] right-2"
        icon="material-symbols:add-2"
        size="xl"
        :ui="{ rounded: 'rounded-full' }"
    />
    <UContainer>
      <h1 class="flex items-center gap-2 text-2xl">
        <UIcon name="fa6-solid:feather-pointed" class="w-5 h-5"/>
        Notes
      </h1>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
