<template>
  <form class="mt-4 ml-4" @submit.prevent="onSubmit">
    <input
      type="text"
      id="title"
      v-model="form.title"
      class="mb-3 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Title"
    />
    <p v-if="errors.title" class="text-red-500">{{ errors.title }}</p>
    <div
      class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <label for="comment" class="sr-only">Your comment</label>
      <textarea
        id="comment"
        v-model="form.content"
        rows="6"
        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
        placeholder="Write a comment..."
      ></textarea>
    </div>
    <button
      type="submit"
      class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-lightGreen rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
    >
      Post comment
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import * as yup from "yup";

type Props = {
  symbol: string;
  handleComment: (form: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const props = defineProps<Props>();
const toast = useToast();
const errors = reactive<{ title?: string; content?: string }>({});
const isLoading = ref(false); // Thêm trạng thái loading

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
});

const form = reactive({
  title: "",
  content: "",
});

const onSubmit = async () => {
  isLoading.value = true;
  try {
    await validationSchema.validate(form, { abortEarly: false });
    await props.handleComment({ ...form });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors.title = "";
      errors.content = "";
      err.inner.forEach((e) => {
        errors[e.path as keyof typeof errors] = e.message;
      });
    } else {
      toast.error("Failed to create comment. Please try again.");
    }
  } finally {
    isLoading.value = false;
  }
};
</script>
