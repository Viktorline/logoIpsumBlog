<script setup lang="ts">
// import AppHeader from './widgets/header/AppHeader.vue'
// import AppSidebar from './widgets/sidebar/AppSidebar.vue'
</script>

<template>
  <main class="app-wrapper">
    <!-- <AppHeader @open-sidebar="sidebar.toggle" />
    <AppSidebar :open="sidebar.isOpen" @close="sidebar.toggle" /> -->
    <router-view />
  </main>
</template>
