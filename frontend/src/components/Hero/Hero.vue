<script setup lang="ts">
import hero from "./Hero.png";
</script>

<template>
  <section id="hero">
    <div class="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
      <!-- Left Content -->
      <div
        class="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt-16 lg:w-1/2 xl:mb-52"
      >
        <h1 class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
          Financial data with no news.
        </h1>
        <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Search relevant financial documents without fear mongering and fake news.
        </p>
        <div class="mx-auto lg:mx-0">
          <router-link
            :to="`/search`"
            class="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
          >
            Get Started
          </router-link>
        </div>
      </div>

      <!-- Right Image -->
      <div class="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
        <img
          class="drop-shadow-[0px_0px_10px_rgba(255,255,255,0.8)] text-white rounded-lg"
          :src="hero"
          alt="Hero Image"
        />
      </div>
    </div>
  </section>
</template>
