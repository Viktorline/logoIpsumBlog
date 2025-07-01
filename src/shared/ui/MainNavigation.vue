<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { navigationItems } from '@/shared/constants/routes'

interface Props {
  variant?: 'horizontal' | 'vertical'
  onItemClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'horizontal',
  onItemClick: undefined,
})

const router = useRouter()
const route = useRoute()

const isActive = (name: string) => route.name === name

const handleNavigation = (path: string) => {
  router.push(path)
  if (props.onItemClick) {
    props.onItemClick()
  }
}
</script>

<template>
  <nav :class="['flex gap-4', variant === 'vertical' ? 'flex-col' : 'flex-row']">
    <button
      v-for="item in navigationItems"
      :key="item.name"
      class="font-semibold text-base leading-[16px] rounded-[6px] transition-colors duration-200 px-3.5 py-2 w-full text-left"
      :class="
        isActive(item.name)
          ? 'bg-white/10 text-blue-500'
          : 'bg-transparent text-white hover:bg-white/10'
      "
      @click="handleNavigation(item.path)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>
