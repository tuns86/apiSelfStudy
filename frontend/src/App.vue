<template>
  <Suspense>
    <div>
      <Navbar />
      <router-view />
    </div>
  </Suspense>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
