import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    return {
        data: {
          
        },
        checkedItems: [],
      errors: {},
    };
  },
});
