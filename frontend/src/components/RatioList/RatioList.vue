<script setup lang="ts">
defineProps<{
  config: any;
  data: any;
}>();
</script>
<template>
  <div class="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
    <ul class="divide-y divide-gray-200">
      <li v-for="(row) in config" class="py-6 sm:py-6">
        <div :class="row.class" class="flex items-center space-x-4">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ row.label }}
            </p>
            <p v-if="row.subTitle" class="text-sm text-gray-500 truncate">
              <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">
                {{ row.subTitle }}
              </a>
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {{ row.render(data) }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
