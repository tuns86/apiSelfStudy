<template>
  <StockCommentForm :symbol="props.stockSymbol" :handleComment="handleComment" />
</template>

<script setup lang="ts">
import { commentPostAPI } from "@/services/CommentService";
import { useToast } from "vue-toastification";
import StockCommentForm from "../StockCommentForm/StockCommentForm.vue";

const toast = useToast();

interface Props {
  stockSymbol: string;
}

const props = defineProps<Props>();

type CommentFormInputs = {
  title: string;
  content: string;
};

const handleComment = async (form: CommentFormInputs) => {
  try {
    const res = await commentPostAPI(form.title, form.content, props.stockSymbol);
    if (res) {
      toast.success("Comment created successfully.");
    }
  } catch (err) {
    toast.warning("Failed to create comment. Please try again.");
  }
};
</script>
