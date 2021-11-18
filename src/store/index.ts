import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

import userModule from "./modules/user";
import { AllStateTypes, IRootState } from "@/store/interface";
import todoModule from "./modules/todoList";

export const key: InjectionKey<Store<IRootState>> = Symbol("zlf");
export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>(key);
}
export default createStore<IRootState>({
    modules: { userModule, todoModule },
});
