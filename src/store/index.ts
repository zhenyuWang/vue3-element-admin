import { createStore } from "vuex";
import getters from "./getters";
import user from "./modules/user";
import permission from "./modules/permission";

const modules: any = {
  user,
  permission,
};
const store = createStore({
  modules,
  getters,
});
export default store;
