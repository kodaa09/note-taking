<script setup lang="ts">

</script>

<template>
  <header class="fixed bottom-0 w-full border-t border-gray-200">
    <nav>
      <ul class="flex items-center justify-between">
        <li class="flex">
          <NuxtLink class="flex flex-col items-center py-3 px-4" to="/notes" active-class="text-primary">
            <UIcon name="mdi:home-variant" class="h-6 w-6"/>
            <p class="hidden sm:block text-[12px]">Home</p>
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="flex flex-col items-center py-3 px-4" to="/search" active-class="text-primary">
            <UIcon name="tabler:search" class="h-6 w-6"/>
            <p class="hidden sm:block text-[12px]">Search</p>
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="flex flex-col items-center py-3 px-4" to="/archived" active-class="text-primary">
            <UIcon name="material-symbols:archive" class="h-6 w-6"/>
            <p class="hidden sm:block text-[12px]">Archived</p>
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="flex flex-col items-center py-3 px-4" to="/tags" active-class="text-primary">
            <UIcon name="bi:tags-fill" class="h-6 w-6"/>
            <p class="hidden sm:block text-[12px]">Tags</p>
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="flex flex-col items-center py-3 px-4" to="/settings" active-class="text-primary">
            <UIcon name="material-symbols:settings-outline" class="h-6 w-6"/>
            <p class="hidden sm:block text-[12px]">Settings</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
