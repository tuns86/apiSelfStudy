<script setup lang="ts">
import logo from "./logo.png";

</script>

<template>
  <nav class="relative container mx-auto p-6">
    <div class="flex items-center justify-between">
      <!-- Logo và Dashboard -->
      <div class="flex items-center space-x-20">
        <router-link to="/">
          <img :src="logo" alt="" />
        </router-link>
        <div class="hidden font-bold lg:flex">
          <router-link to="/search" class="text-black hover:text-darkBlue">
            Search
          </router-link>
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
