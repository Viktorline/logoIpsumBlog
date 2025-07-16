<script setup lang="ts">
import type { Article } from '@/shared/stores/articles'
import { IconCalendar, IconTime, IconComment } from '@/shared/ui/icons'

defineProps<{ article: Article }>()
</script>

<template>
  <article class="article-content">
    <header class="mb-6">
      <div class="flex items-center gap-4 text-sm text-[#777] mb-3">
        <span class="flex items-center gap-1"><IconCalendar />{{ article.dateCreated }}</span>
        <span class="flex items-center gap-1"><IconTime />{{ article.timeToRead }}</span>
        <span class="flex items-center gap-1">
          <IconComment />
          {{ article.comments.length }}
        </span>
      </div>
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#23262F] mb-4 leading-tight">
        {{ article.name }}
      </h1>
      <p class="text-lg text-[#353945] leading-relaxed">{{ article.description }}</p>
    </header>

    <div class="mb-8">
      <img
        v-if="article.images.length > 0"
        :src="article.images[0]"
        :alt="article.name"
        class="w-full rounded-2xl object-cover h-64 md:h-80 lg:h-96"
      />
    </div>

    <div class="prose prose-lg max-w-none mb-8">
      <div class="text-[#353945] leading-relaxed whitespace-pre-line">
        {{ article.text }}
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in article.tags"
        :key="tag"
        class="bg-[#F4F6FB] text-[#3B82F6] rounded-full px-4 py-2 text-sm font-medium"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<style scoped>
.article-content {
  max-width: 800px;
}
</style>
