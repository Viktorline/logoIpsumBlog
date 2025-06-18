<script setup lang="ts">
import AppHeader from './widgets/header/AppHeader.vue'
</script>

<template>
  <main class="app-wrapper">
    <AppHeader />
    <!-- <AppSidebar :open="sidebar.isOpen" @close="sidebar.toggle" /> -->
    <router-view />
  </main>
</template>
