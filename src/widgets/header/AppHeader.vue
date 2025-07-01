<script setup lang="ts">
import { useResize } from '@/shared/hooks/useResize'
import MainNavigation from '@/shared/ui/MainNavigation.vue'
// import { useSidebarStore } from '@/shared/stores/sidebar'

const { isDesktop } = useResize()

// const sidebar = useSidebarStore()
</script>

<template>
  <header
    class="flex w-full tablet:h-[62px] h-[78px] bg-black sticky top-0 z-50 py-[15px] px-[56px]"
  >
    <div class="flex gap-20 max-w-[1280px]">
      <div class="flex gap-20">
        <div class="flex items-center">
          <img src="@/assets/frame.svg" alt="Logo" />
        </div>
      </div>
      <MainNavigation v-if="isDesktop" />
    </div>
  </header>
</template>
