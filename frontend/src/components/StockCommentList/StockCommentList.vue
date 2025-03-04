<template>
  <div v-if="comments">
    <div v-for="comment in comments">
      <StockCommentListItem :comment="comment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CommentGet } from "@/models/Comment";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem.vue";

const props = defineProps<{
  comments: CommentGet[];
}>();
</script>

<style scoped></style>
