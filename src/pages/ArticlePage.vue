<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useArticleStore } from '@/shared/stores/article'
import { IconClose } from '@/shared/ui/icons'
import ArticleContent from '@/widgets/articleСontent/ArticleContent.vue'
import ArticleComments from '@/widgets/articleСomments/ArticleComments.vue'

const route = useRoute()
const router = useRouter()
const articleStore = useArticleStore()
const { currentArticle, isLoading } = storeToRefs(articleStore)

onMounted(() => {
  const id = Number(route.params.id)
  if (id) {
    articleStore.getArticleById(id)
  }
})

onUnmounted(() => {
  articleStore.clearCurrentArticle()
})

function goBack() {
  router.back()
}

function handleAddComment(text: string) {
  articleStore.addComment(text)
}
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC] py-6 px-4">
    <div class="absolute top-20 right-6">
      <button
        @click="goBack"
        class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#777] hover:text-[#23262F] transition"
      >
        <IconClose />
      </button>
    </div>

    <div class="max-w-4xl mx-auto">
      <div v-if="isLoading" class="flex items-center justify-center py-16">
        <div class="text-[#777]">Загрузка...</div>
      </div>

      <div v-else-if="!currentArticle" class="flex items-center justify-center py-16">
        <div class="text-center">
          <div class="text-[#777] text-lg mb-2">Статья не найдена</div>
          <button @click="goBack" class="text-[#3B82F6] hover:underline">Вернуться назад</button>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <ArticleContent :article="currentArticle" />
        </div>

        <div class="lg:col-span-1">
          <div class="sticky top-6">
            <ArticleComments :comments="currentArticle.comments" @add-comment="handleAddComment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
}
</style>
