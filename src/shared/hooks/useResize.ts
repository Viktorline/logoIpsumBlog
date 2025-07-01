import { ref, onMounted, onUnmounted, computed } from 'vue'

enum Breakpoints {
  MOBILE = 360,
  TABLET = 720,
  DESKTOP = 1280,
}

export const useResize = () => {
  const width = ref(window.innerWidth)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
    updateWidth()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const isMobile = computed(() => width.value <= Breakpoints.MOBILE)
  const isTablet = computed(
    () => width.value > Breakpoints.MOBILE && width.value <= Breakpoints.TABLET,
  )
  const isDesktop = computed(() => width.value >= Breakpoints.DESKTOP)

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
  }
}
