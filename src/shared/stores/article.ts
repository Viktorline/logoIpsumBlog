import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Article, Comment } from './articles'
import { useArticlesStore } from './articles'

export const useArticleStore = defineStore('article', () => {
  const currentArticle = ref<Article | null>(null)
  const isLoading = ref(false)

  const articlesStore = useArticlesStore()

  const hasComments = computed(() => {
    return currentArticle.value ? currentArticle.value.comments.length > 0 : false
  })

  function getArticleById(id: number) {
    isLoading.value = true
    try {
      const article = articlesStore.articles.find((a) => a.id === id)
      currentArticle.value = article || null
    } finally {
      isLoading.value = false
    }
  }

  function addComment(text: string, author: string = 'Аноним') {
    if (!currentArticle.value) return

    const newComment: Comment = {
      id: Date.now(),
      author,
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      photo: '',
      text,
    }

    currentArticle.value.comments.push(newComment)
  }

  function clearCurrentArticle() {
    currentArticle.value = null
  }

  return {
    currentArticle,
    isLoading,
    hasComments,
    getArticleById,
    addComment,
    clearCurrentArticle,
  }
})
