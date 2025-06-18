<script setup lang="ts">
import { useResize } from '@/shared/hooks/useResize'
import { useRoute, useRouter } from 'vue-router'
// import { useSidebarStore } from '@/shared/stores/sidebar'

const router = useRouter()
const route = useRoute()

const isActive = (name: string) => route.name === name

const { isDesktop } = useResize()

// const sidebar = useSidebarStore()
</script>

<template>
  <header class="w-full tablet:h-[62px] h-[78px] bg-black sticky top-0 z-50 py-[15px] px-[56px]">
    <div class="flex gap-20 max-w-[1280px] mx-auto">
      <div class="flex items-center gap-20">
        <div class="flex items-center">
          <img src="@/assets/frame.svg" alt="Logo" />
        </div>
      </div>
      <nav v-if="isDesktop" class="flex gap-5">
        <button
          class="font-semibold text-base leading-[16px] rounded-[6px] transition-colors duration-200 px-3.5 py-2"
          :class="
            isActive('Main')
              ? 'bg-white/10 text-blue-500'
              : 'bg-transparent text-white hover:bg-white/10'
          "
          @click="router.push('/main')"
        >
          Главная
        </button>
        <button
          class="font-semibold text-base leading-[16px] rounded-[6px] transition-colors duration-200 px-3.5 py-2"
          :class="
            isActive('Blog')
              ? 'bg-white/10 text-blue-500'
              : 'bg-transparent text-white hover:bg-white/10'
          "
          @click="router.push('/blog')"
        >
          Блог
        </button>
      </nav>
    </div>
  </header>
</template>
