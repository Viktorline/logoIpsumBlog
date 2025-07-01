<script setup lang="ts">
import AppHeader from './widgets/header/AppHeader.vue'
import AppSidebar from './widgets/sidebar/AppSidebar.vue'
</script>

<template>
  <main class="app-wrapper min-w-[360px]">
    <AppHeader />
    <AppSidebar />
    <router-view />
  </main>
</template>
