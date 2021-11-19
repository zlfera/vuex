import { Commit } from "vuex";
import UserModuleTypes from "./interface";
import { MutationTypes } from "./mutationsTypes";

interface ICtx {
    commit: Commit;
    state: UserModuleTypes;
}
export default {
    [MutationTypes.setTodo]({ commit }: ICtx, payload: UserModuleTypes): void {
        commit(MutationTypes.setTodo, payload);
    },
};
