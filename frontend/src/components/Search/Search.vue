<script setup lang="ts">

interface Props {
  onSearchSubmit: (e: Event) => void;
  search: string | undefined;
  handleSearchChange: (e: Event) => void;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="relative bg-gray-100">
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <form
        class="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        @submit="props.onSearchSubmit($event)">
        <input class="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none" :value="props.search"
          @input="props.handleSearchChange($event)" />
      </form>
    </div>
  </section>
</template>
