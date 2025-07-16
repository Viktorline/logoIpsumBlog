<script setup lang="ts">
import type { Article } from '@/shared/stores/articles'
import { computed } from 'vue'
import { IconCalendar, IconTime, IconComment } from '@/shared/ui/icons'
import { Routes } from '@/shared/constants/routes'

const props = defineProps<{ article: Article }>()

const mainImage = computed(() => props.article.images[0] || '')
const articleLink = computed(() => `${Routes.ARTICLE}/${props.article.id}`)
</script>

<template>
  <router-link
    :to="articleLink"
    class="article-card bg-white rounded-2xl shadow-sm p-0 overflow-hidden flex flex-col transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
  >
    <img v-if="mainImage" :src="mainImage" alt="" class="w-full h-48 object-cover" />
    <div v-else class="w-full h-48 bg-[#F4F6FB] flex items-center justify-center">
      <Logo />
    </div>
    <div class="flex flex-col flex-1 p-4">
      <div class="flex items-center gap-3 text-xs text-[#777] mb-1">
        <span class="flex items-center gap-1"><IconCalendar />{{ article.dateCreated }}</span>
        <span class="flex items-center gap-1"><IconTime />{{ article.timeToRead }}</span>
        <span class="flex items-center gap-1"
          ><IconComment />
          <span v-if="article.comments.length > 0">{{ article.comments.length }}</span>
          <span v-else>0</span>
        </span>
      </div>
      <div class="font-bold text-lg text-[#23262F] mb-1 line-clamp-1">{{ article.name }}</div>
      <div class="text-[#353945] text-sm mb-2 line-clamp-2">{{ article.description }}</div>
      <div class="flex flex-wrap gap-2 mt-auto">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="bg-[#F4F6FB] text-[#3B82F6] rounded-full px-3 py-1 text-xs font-medium"
          >{{ tag }}</span
        >
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.article-card {
  min-width: 0;
  min-height: 340px;
  box-shadow: 0 2px 8px 0 rgba(31, 34, 54, 0.06);
  text-decoration: none;
  color: inherit;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
