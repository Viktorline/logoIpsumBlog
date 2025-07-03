<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useArticlesStore } from '@/shared/stores/articles'
import ArticleCard from './ArticleCard.vue'

const { articles } = storeToRefs(useArticlesStore())
</script>

<template>
  <div>
    <div
      v-if="articles.length > 0"
      class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6"
    >
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
    <div v-else class="flex flex-col items-center justify-center min-h-[300px] py-16">
      <svg width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="16" fill="#F4F6FB" />
        <g opacity=".5">
          <path
            d="M36 36H20a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"
            stroke="#B1B5C3"
            stroke-width="2"
          />
          <circle cx="28" cy="28" r="4" stroke="#B1B5C3" stroke-width="2" />
        </g>
      </svg>
      <div class="mt-4 text-[#B1B5C3] text-lg font-medium">Поиск не дал результатов</div>
      <div class="text-[#B1B5C3] text-sm mt-1">
        Повторите поиск или используйте фильтр для структуризации контента
      </div>
    </div>
  </div>
</template>
