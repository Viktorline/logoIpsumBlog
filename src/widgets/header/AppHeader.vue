<script setup lang="ts">
import { useResize } from '@/shared/hooks/useResize'
import { useSidebarStore } from '@/shared/stores/sidebar'
import MainNavigation from '@/shared/ui/MainNavigation.vue'

const { isDesktop } = useResize()
const sidebar = useSidebarStore()

const toggleSidebar = () => {
  sidebar.toggle()
}
</script>

<template>
  <header
    class="flex w-full desktop:h-[62px] h-[78px] bg-black sticky top-0 z-50 py-[15px] desktop:px-14 px-3"
  >
    <div class="flex items-center gap-20 w-full max-w-[1280px]">
      <div class="flex items-center gap-4">
        <button
          v-if="!isDesktop"
          @click="toggleSidebar"
          class="text-white hover:text-gray-300 transition-colors duration-200 p-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div class="flex items-center">
          <img src="@/assets/frame.svg" alt="Logo" />
        </div>
      </div>

      <MainNavigation v-if="isDesktop" />
    </div>
  </header>
</template>
