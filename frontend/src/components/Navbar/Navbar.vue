<script setup lang="ts">
import { useAuthStore } from "@/context/useAuth";
import { storeToRefs } from "pinia";
import logo from "./logo.png";

const authStore = useAuthStore();
const { user, isLoggedIn } = storeToRefs(authStore);
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
      <div v-if="isLoggedIn" class="hidden lg:flex items-center space-x-6 text-back">
        <div class="hover:text-darkBlue">Welcome, {{ user?.userName }}</div>
        <a
          @click="authStore.logout"
          class="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
        >
          Logout
        </a>
      </div>
      <div v-else="isLoggedIn" class="hidden lg:flex items-center space-x-6 text-back">
        <router-link :to="`/login`">
          <div class="hover:text-darkBlue">Login</div>
        </router-link>

        <router-link :to="`/register`">
          <div
            class="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Sign Up
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
