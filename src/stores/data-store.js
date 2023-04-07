import { defineStore } from "pinia";


export const useDataStore = defineStore("dataStore", {
  state: () => ({
    token: {
      code: "",
      expire: "",
    },
    user: {},
  }),
  persist: {
    paths: ["user", "token"],
  },
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(code, expire) {
      this.token.code = code;
      this.token.expire = expire;
    },
    logout() {
      this.token = {
        code: "",
        expire: "",
      };
      this.user = {};

    },
  },
});
