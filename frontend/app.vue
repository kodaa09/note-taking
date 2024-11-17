<script setup lang="ts">
const color = useColorMode()
color.preference = 'light'
</script>
<template>
  <NuxtLayout>
    <UContainer class="h-full md:ml-[210px] md:mt-[60px] lg:px-0 md:px-0">
      <NuxtPage/>
    </UContainer>
  </NuxtLayout>
  <UNotifications/>
</template>

<style>
html, body, #__nuxt {
  height: 100%;
}
</style>
