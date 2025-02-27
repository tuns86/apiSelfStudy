<script setup lang="ts">
interface Props{
  ticker: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="relative md:ml-64 bg-blueGray-100 w-full">
    <div class="relative pt-20 pb-32 bg-lightBlue-500">
      <div class="px-4 md:px-6 mx-auto w-full">
        <div>
          <div class="flex flex-wrap">
            <slot />
          </div>
          <div class="flex flex-wrap">
            <router-view :context="props.ticker"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
