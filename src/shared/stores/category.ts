import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const searchQuery = ref('')
  const selectedCategories = ref<number[]>([])
  const categories = ref([
    { id: 1, name: 'Город' },
    { id: 2, name: 'Природа' },
    { id: 3, name: 'Люди' },
    { id: 4, name: 'Животные' },
    { id: 5, name: 'Еда' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Архитектура' },
    { id: 8, name: 'Искусство' },
  ])
  const isFilterOpen = ref(false)

  const isFiltered = computed(() => {
    return !!searchQuery.value || selectedCategories.value.length > 0
  })

  function setSearchQuery(val: string) {
    searchQuery.value = val
  }

  function toggleCategory(id: number) {
    const idx = selectedCategories.value.indexOf(id)
    if (idx === -1) {
      selectedCategories.value.push(id)
    } else {
      selectedCategories.value.splice(idx, 1)
    }
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedCategories.value = []
  }

  function setFilterOpen(val: boolean) {
    isFilterOpen.value = val
  }

  return {
    searchQuery,
    selectedCategories,
    categories,
    isFiltered,
    isFilterOpen,
    setSearchQuery,
    toggleCategory,
    clearFilters,
    setFilterOpen,
  }
})
