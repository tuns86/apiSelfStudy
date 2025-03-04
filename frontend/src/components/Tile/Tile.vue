<script setup lang="ts">
const props = defineProps<{
  title: string;
  subTitle: string;
}>();
</script>

<template>
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-black rounded-lg mb-6 xl:mb-0 shadow-lg"
    >
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-white uppercase font-bold text-xs">
              {{ props.title }}
            </h5>
            <span class="font-bold text-white text-xl">{{ props.subTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
