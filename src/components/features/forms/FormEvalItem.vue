<script setup>
import { ref } from "vue";
import { useFormStore } from "../../../stores/form";

const store = useFormStore();

const checkedArray = ref([])

// store.checkedItems = checkedArray.value

// forEach(item => {
//   if (item.id === props.item.id) {
//     checkedArray.value.push(item.id)
//   }
// })

// const emit = defineEmits([
//   "onChecked",
//   "onUnchecked",
//   "onCheckedAll",
//   "onUncheckedAll",
//   "update:modelValue",
// ]);
const props = defineProps({
  modelValue: String,
  strength: Object,
});

const checked = ref(props.strength.isSelected);

// checkedArray.value.push(checked.value)
// console.log(checkedItemsReactive);
// console.log(props.strength);

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
        :name="props.strength.trait"
        :value="props.strength.content"
        :id="props.strength.trait"
        v-model="checked"
        @change="$emit('someEvent', checked)"
        class="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
      />
      <label
        :for="props.strength.trait"
        class="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"
      ></label>
    </div>
  </div>
</template>
