import { createStore } from "vuex";
import getters from "./getters";
import user from "./modules/user";

const modules = {
  user,
};
const store = createStore({
  modules,
  getters,
});
export default store;
