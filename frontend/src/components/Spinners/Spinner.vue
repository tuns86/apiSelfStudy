//
<script setup lang="ts">
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
</script>

<template>
  <div
    id="loading-spinner"
    class="flex justify-center items-center mt-40"
    aria-label="Loading Spinner"
    data-testid="loader"
  >
    <fulfilling-bouncing-circle-spinner
      :animation-duration="4000"
      :size="100"
      color="#00BD7E"
    />
  </div>
</template>

<style scoped>
.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
