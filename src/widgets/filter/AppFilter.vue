<script setup lang="ts">
import { IconSearch, IconChevron } from '@/shared/ui/icons'
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@/shared/stores/category'
import CategoryPanel from './ui/CategoryPanel.vue'
import { useResize } from '@/shared/hooks/useResize'

const categoryStore = useCategoryStore()
const { isDesktop } = useResize()

const { searchQuery, selectedCategories, categories, isFiltered, isFilterOpen } =
  storeToRefs(categoryStore)

function onInput(e: Event) {
  categoryStore.setSearchQuery((e.target as HTMLInputElement).value)
}
function onToggleCategory(id: number) {
  categoryStore.toggleCategory(id)
}
function onClear() {
  categoryStore.clearFilters()
}
function toggleFilter() {
  categoryStore.setFilterOpen(!isFilterOpen.value)
}
</script>

<template>
  <div class="filter-container bg-white desktop:px-14 px-5">
    <div class="flex items-center py-5 gap-5 w-full">
      <div class="flex-1 flex">
        <div class="relative max-w-[320px]">
          <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            :value="searchQuery"
            @input="onInput"
            type="text"
            placeholder="Поиск"
            class="w-full h-10 pl-10 pr-4 rounded-[8px] bg-[#F7F8FA] text-[#B1B5C3] placeholder-[#B1B5C3] text-base outline-none border-none focus:bg-white focus:shadow"
          />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button
          v-if="isFiltered"
          @click="onClear"
          class="text-[#3B82F6] text-sm font-medium hover:underline"
        >
          Очистить
        </button>
        <button
          @click="toggleFilter"
          class="flex items-center text-[#A1A5B7] text-sm font-medium gap-1 cursor-pointer select-none focus:outline-none focus:ring-0 active:outline-none active:ring-0"
        >
          {{ isFilterOpen ? (!isDesktop ? 'Скрыть' : 'Скрыть фильтр') : 'Фильтр' }}
          <component
            class="text-[#A1A5B7] cursor-pointer select-none"
            :is="() => IconChevron(isFilterOpen)"
          />
        </button>
      </div>
    </div>
    <CategoryPanel
      :categories="categories"
      :selected-categories="selectedCategories"
      :show="isFilterOpen"
      @toggle="onToggleCategory"
    />
  </div>
</template>

<style scoped>
.filter-root {
  min-width: 0;
}
.filter-container {
  transition: height 0.3s ease;
}
</style>
