<script setup lang="ts">
import { ref } from 'vue'
import type { Comment } from '@/shared/stores/articles'

defineProps<{ comments: Comment[] }>()
defineEmits<{ addComment: [text: string] }>()

const newCommentText = ref('')

function submitComment() {
  if (newCommentText.value.trim()) {
    newCommentText.value = ''
  }
}
</script>

<template>
  <section class="article-comments">
    <h2 class="text-xl font-bold text-[#23262F] mb-6">
      Комментарии {{ comments.length > 0 ? comments.length : '' }}
    </h2>

    <div v-if="comments.length > 0" class="space-y-4 mb-8">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-white rounded-xl p-4 border border-[#F4F5F6]"
      >
        <div class="flex items-start gap-3">
          <div
            class="w-10 h-10 rounded-full bg-[#F4F6FB] flex-shrink-0 flex items-center justify-center"
          >
            <span class="text-[#3B82F6] font-medium text-sm">
              {{ comment.author.charAt(0).toUpperCase() }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="font-medium text-[#23262F] text-sm">{{ comment.author }}</span>
              <span class="text-xs text-[#777]">{{ comment.date }} • {{ comment.time }}</span>
            </div>
            <p class="text-[#353945] text-sm leading-relaxed">{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-4 border border-[#F4F5F6]">
      <h3 class="font-medium text-[#23262F] mb-3">Добавить комментарий</h3>
      <div class="space-y-3">
        <textarea
          v-model="newCommentText"
          placeholder="Введите ваш комментарий..."
          class="w-full p-3 border border-[#E6E8EC] rounded-lg resize-none focus:outline-none focus:border-[#3B82F6] text-sm"
          rows="3"
        ></textarea>
        <div class="flex justify-end">
          <button
            @click="submitComment"
            :disabled="!newCommentText.trim()"
            class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm font-medium transition hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-comments {
  max-width: 800px;
}
</style>
