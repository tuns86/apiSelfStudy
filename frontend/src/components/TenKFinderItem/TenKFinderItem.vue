<script setup lang="ts">
import type { CompanyTenK } from "@/company";
import { computed } from "vue";
import { useRouter } from "vue-router";

interface Props {
  tenK: CompanyTenK;
}

const props = defineProps<Props>();

const router = useRouter();
const fillingDate = computed(() => new Date(props.tenK.fillingDate).getFullYear());

const navigate = () => {
  router.push(props.tenK.finalLink);
};
</script>

<template>
  <!-- target="_blank" mở link trong tab mới -->
  <!-- rel="noopener noreferrer"" tăng bảo mật khi mở link trong tab mới -->
  <a
    :href="tenK.finalLink"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-lightGreen border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
  >
    10K - {{ props.tenK.symbol }} - {{ fillingDate }}
  </a>
</template>
