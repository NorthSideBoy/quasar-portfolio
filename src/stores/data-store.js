import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    options: {
      general: {
        quantity: 50,
        direction: "none",
        hover: "grab",
        click: "push"
      },
      lines: {
        distance: 100,
        width: 1,
        opacity: 0.4,
        color: '#1D8EF0'
      },
      particles: {
        type: "circle",
        width: 3,
        opacity: 0.5,
        color: "#ffffff"
      }
    }
  }),
  persist: {
    paths: ["options"],
  },
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
  }
});
