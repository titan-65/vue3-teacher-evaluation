<script setup>
import EvalSidebar from "../components/EvalSidebar.vue";
// import EvalNavigation from "../components/EvalNavigation.vue";
import MainFooter from "../components/MainFooter.vue";
import NaviHeader from "../components/NaviHeader.vue";
</script>
<template>
  <div class="flex flex-no-wrap bg-white">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <div class="hidden">
      <EvalSidebar />
    </div>
    <!-- Sidebar ends -->
    <div class="w-full">
      <!-- Navigation starts -->
      <NaviHeader />
      <!-- Navigation ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <slot />
    </div>
  </div>
  <MainFooter />
</template>