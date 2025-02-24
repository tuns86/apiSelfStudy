<script setup lang="ts">
import logo from "./logo.png";

</script>

<template>
  <nav class="relative container mx-auto p-6">
    <div class="flex items-center justify-between">
      <!-- Logo và Dashboard -->
      <div class="flex items-center space-x-20">
        <img :src="logo" alt="Logo" />
        <div class="hidden font-bold lg:flex">
          <a href="#" class="text-black hover:text-darkBlue">Dashboard</a>
        </div>
      </div>

      <!-- Login & Signup -->
      <div class="hidden lg:flex items-center space-x-6 text-back">
        <div class="hover:text-darkBlue">Login</div>
        <a href="#" class="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70">
          Signup
        </a>
      </div>
    </div>
  </nav>
</template>
