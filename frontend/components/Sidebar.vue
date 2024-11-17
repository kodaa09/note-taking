<script setup lang="ts">

</script>

<template>
  <div class="fixed top-0 left-0 bottom-0 px-3 pt-4 w-[210px] border-r border-gray-200">
    <h1 class="flex items-center gap-2 text-2xl mb-8">
      <UIcon name="fa6-solid:feather-pointed" class="w-5 h-5 bg-primary"/>
      Notes
    </h1>
    <nav class="border-b border-gray-200 pb-4">
      <ul>
        <li class="mb-2">
          <NuxtLink class="py-2 px-4 rounded-lg w-full inline-flex items-center gap-2" active-class="bg-gray-200"
                    to="/notes">
            <UIcon name="mdi:home-variant" class="h-5 w-5 bg-primary"/>
            All Notes
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-2 px-4 rounded-lg w-full inline-flex items-center gap-2" active-class="bg-gray-200"
                    to="/archived">
            <UIcon name="material-symbols:archive" class="h-5 w-5 bg-primary"/>
            Archived Notes
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>
