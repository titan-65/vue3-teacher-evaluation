<script setup>
import EvalSidebar from "../components/EvalSidebar.vue";
import EvalNavigation from "../components/EvalNavigation.vue";
</script>
<template>
  <div class="flex flex-no-wrap bg-white">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <EvalSidebar />
    <!-- Sidebar ends -->
    <div class="w-full">
      <!-- Navigation starts -->
      <EvalNavigation />
      <!-- Navigation ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <slot />
    </div>
  </div>
  <p>Footer Goes here</p>
</template>
