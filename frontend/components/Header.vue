<script setup lang="ts">

</script>

<template>
  <div class="absolute top-0 right-0 left-[210px] h-[60px] py-4 border-b border-gray-200">
    <UContainer>
      <div class="flex items-center justify-between">
        <NuxtLink to="/notes">
          All Notes
        </NuxtLink>
        <div class="flex items-center gap-4">
          <form action="">
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search..."
            />
          </form>
          <NuxtLink class="h-6 w-6" to="/settings">
            <UIcon name="material-symbols:settings-outline" class="h-6 w-6"/>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
