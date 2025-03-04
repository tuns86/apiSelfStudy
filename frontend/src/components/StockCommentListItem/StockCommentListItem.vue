<template>
  <div
    class="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full border rounded-lg bg-black shadow-lg"
  >
    <div class="relative flex gap-4">
      <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between">
          <p
            class="relative text-xl whitespace-nowrap truncate overflow-hidden text-white underline decoration-lightGreen decoration-2 break-words"
          >
            {{ comment.title }}
          </p>
        </div>
      </div>
    </div>
    <p class="-mt-4 text-white break-words">{{ comment.content }}</p>
    <p class="text-dark text-red-600 text-sm">@{{ comment.createdBy }}</p>
  </div>
</template>

<script setup lang="ts">
import type { CommentGet } from "@/models/Comment";

const props = defineProps<{
  comment: CommentGet;
}>();
</script>

<style scoped></style>
