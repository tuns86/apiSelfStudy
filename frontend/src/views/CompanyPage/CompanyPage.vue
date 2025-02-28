<script setup lang="ts">
import { getCompanyProfile } from "@/api"; // Import API giống React
import type { CompanyProfile } from "@/company"; // Import kiểu dữ liệu
import CompanyDashboard from "@/components/CompanyDashboard/CompanyDashboard.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Spinner from "@/components/Spinners/Spinner.vue";
import TenKFinder from "@/components/TenKFinder/TenKFinder.vue";
import Tile from "@/components/Tile/Tile.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const ticker = route.params.ticker as string;
const company = ref<CompanyProfile>();

onMounted(async () => {
  try {
    const result = await getCompanyProfile(ticker);
    if (result) {
      company.value = result.data[0]; // ✅ Lấy phần tử đầu tiên từ mảng
    } else {
      console.error("No data found for the company:", ticker);
    }
  } catch (error) {
    console.error("Error fetching company profile:", error);
  }
});
</script>

<template>
  <div
    v-if="company"
    class="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden"
  >
    <Sidebar />
    <CompanyDashboard ticker="ticker">
      <Tile title="Company Name" :subTitle="company.companyName" />
      <Tile title="Price" :subTitle="'$' + company.price.toString()" />
      <Tile title="DCF" :subTitle="'$' + company.dcf.toString()" />
      <Tile title="Sector" :subTitle="company.sector" />
      <!-- This Api is forbiden -->
      <!-- <CompFinder :ticker="company.symbol" /> -->
      <TenKFinder :ticker="company.symbol" />
      <p
        class="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4"
      >
        {{ company.description }}
      </p>
    </CompanyDashboard>
  </div>
  <Spinner v-else></Spinner>
</template>
