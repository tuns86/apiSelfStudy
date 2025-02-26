<script setup lang="ts">
import { getCompanyProfile } from "@/api"; // Import API giống React
import type { CompanyProfile } from "@/company"; // Import kiểu dữ liệu
import CompanyDashboard from "@/components/CompanyDashboard/CompanyDashboard.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Tile from "@/components/Tile/Tile.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const ticker = route.params.ticker as string;
const company = ref<CompanyProfile>();
const activeSidebarItem = ref<number>(1);

onMounted(async () => {
  try {
    const result = await getCompanyProfile(ticker);
    console.log("API response:", result);
    if (result) {
      company.value = result; // ✅ Lấy phần tử đầu tiên từ mảng
    } else {
      console.error("No data found for the company:", ticker);
    }
  } catch (error) {
    console.error("Error fetching company profile:", error);
  }
});
</script>

<template>
  <div v-if="company" class="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
    <Sidebar />
    <CompanyDashboard >
      <Tile title="Company Name" :subTitle="company.companyName" />
    </CompanyDashboard>
  </div>
  <div v-else>Company Not Found!</div>
</template>
