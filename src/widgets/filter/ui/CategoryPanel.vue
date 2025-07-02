<script setup lang="ts">
import { defineEmits } from 'vue'
import type { PropType } from 'vue'
import { IconCheck, IconPlus } from '@/shared/ui/icons'

defineProps({
  categories: {
    type: Array as PropType<Array<{ id: number; name: string }>>,
    required: true,
  },
  selectedCategories: {
    type: Array as PropType<number[]>,
    required: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggle'])

const toggleCategory = (id: number) => {
  emit('toggle', id)
}
</script>

<template>
  <div v-if="show" class="category-panel flex flex-wrap gap-3 w-full pb-5">
    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="toggleCategory(cat.id)"
      class="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-base font-light leading-4 transition border-none focus:outline-none"
      :class="
        selectedCategories.includes(cat.id)
          ? 'bg-[#3B82F6] text-white shadow-sm'
          : 'bg-[#F4F6FB] text-[#3B82F6] hover:bg-[#E6F0FE]'
      "
    >
      <span>{{ cat.name }}</span>
      <span v-if="selectedCategories.includes(cat.id)"><IconCheck /></span>
      <span v-else><IconPlus /></span>
    </button>
  </div>
</template>

<style scoped></style>
