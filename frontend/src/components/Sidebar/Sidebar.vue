<script setup lang="ts">
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRoute } from "vue-router";
const route = useRoute();
const ticker = route.params.ticker as string;

</script>

<template>
  <nav
    class="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
    <div
      class="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
      <div
        class="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
        <div class="md:flex-col md:min-w-full flex flex-col list-none">
          <!-- Company Profile Link -->
          <router-link :to="`/company/${ticker}/company-profile`"
            class="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            <font-awesome-icon :icon="faHome" />
            <h6 class="ml-3">Company Profile</h6>
          </router-link>

          <!-- Income Statement Link -->
          <router-link :to="`/company/${ticker}/income-statement`"
            class="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            <font-awesome-icon :icon="faHome" />
            <h6 class="ml-3">Income Statement</h6>
          </router-link>

          <!-- Balance Sheet Link -->
          <router-link :to="`/company/${ticker}/balance-sheet`"
            class="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            <font-awesome-icon :icon="faHome" />
            <h6 class="ml-3">Balance Sheet</h6>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
