<template>
  <div v-if="isLoading" class="flex flex-col">
    <Spinner />
  </div>
  <div v-else class="flex flex-col">
    <StockCommentList :comments="comments!" />
    <StockCommentForm :symbol="props.stockSymbol" :handleComment="handleComment" />
  </div>
</template>

<script setup lang="ts">
import type { CommentGet } from "@/models/Comment";
import { commentGetAPI, commentPostAPI } from "@/services/CommentService";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import Spinner from "../Spinners/Spinner.vue";
import StockCommentForm from "../StockCommentForm/StockCommentForm.vue";
import StockCommentList from "../StockCommentList/StockCommentList.vue";

const toast = useToast();
const isLoading = ref(false); // Thêm trạng thái loading
const comments = ref<CommentGet[] | null>(null);

interface Props {
  stockSymbol: string;
}

const props = defineProps<Props>();

type CommentFormInputs = {
  title: string;
  content: string;
};

onMounted(() => {
  getComments();
});

const handleComment = async (form: CommentFormInputs) => {
  try {
    const res = await commentPostAPI(form.title, form.content, props.stockSymbol);
    if (res) {
      toast.success("Comment created successfully.");
      getComments();
    }
  } catch (err) {
    toast.warning("Failed to create comment. Please try again.");
  }
};

const getComments = async () => {
  try {
    isLoading.value = true;
    const res = await commentGetAPI(props.stockSymbol);
    if (res) {
      isLoading.value = false;
      comments.value = res?.data!;
      toast.success("Comments fetched successfully.");
    }
  } catch (err) {
    toast.warning("Failed to get comments. Please try again.");
  }
};
</script>
