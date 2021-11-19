import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

import { AllStateTypes, IRootState } from "@/store/interface";
import todoModule from "./modules/todoList";
import userModule from "./modules/user";

export const key: InjectionKey<Store<IRootState>> = Symbol("zlf");
export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>(key);
}
export default createStore({
    modules: { todoModule, userModule },
});
