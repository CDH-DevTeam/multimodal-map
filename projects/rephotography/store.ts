import { ref, watch } from "vue";
import { defineStore } from "pinia";
import config from "./config";

export const rephotographyStore = defineStore("rephotography", () => {
  const categories = ref<Array<string>>(["all"]);
  const years = ref<[number, number]>(config.timeRange);
  const tags = ref<Array<string>>([]);  
  const tagsLayerVisible = ref(false); // Default visibility state for tags layer
  const placesLayerVisible = ref(true); // Default visibility state for places layer
  return { categories, years, tags, tagsLayerVisible, placesLayerVisible };
});
