<script setup>
import { ref } from 'vue'

const props = defineProps({
  strength: Object,
});

const checkedItems = ref([]);


</script>
<template>
  <div class="flex justify-between items-center mb-8 mt-4">
    <div class="w-9/12">
      <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Strength</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ props.strength.content }}
      </p>
    </div>
    <div class="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
      <input
        type="checkbox"
        name=""
        id="toggle1"
        class="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
      />
      <label
        for="toggle1"
        class="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"
      ></label>
    </div>
  </div>
</template>
