<script setup lang="ts">
import { useSidebarStore } from '@/shared/stores/sidebar'
import MainNavigation from '@/shared/ui/MainNavigation.vue'
import { computed } from 'vue'
import { useResize } from '@/shared/hooks/useResize'

const sidebar = useSidebarStore()
const { isMobile } = useResize()

const isVisible = computed(() => sidebar.isOpen)
const isFullWidth = computed(() => isMobile.value)

const handleItemClick = () => {
  sidebar.close()
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 transition-opacity duration-300"
    :class="isVisible ? 'pointer-events-auto' : 'pointer-events-none'"
  >
    <div
      class="absolute inset-0 bg-black transition-opacity duration-300"
      :class="isVisible ? 'opacity-30' : 'opacity-0'"
      @click="sidebar.close()"
    />

    <div
      class="absolute left-0 top-0 h-full transition-transform duration-300 ease-in-out bg-black"
      :class="[isVisible ? 'translate-x-0' : '-translate-x-full', isFullWidth ? 'w-full' : 'w-80']"
      @click.stop
    >
      <div class="flex flex-col h-full relative" :class="isFullWidth ? 'p-4 pt-14' : 'p-6'">
        <button
          v-if="isFullWidth"
          class="absolute top-4 right-4 text-white text-xl"
          @click="sidebar.close()"
        >
          ✕
        </button>

        <MainNavigation variant="vertical" :on-item-click="handleItemClick" />
      </div>
    </div>
  </div>
</template>
