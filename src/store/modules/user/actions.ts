import { Commit } from "vuex";
import UserModuleTypes from "./interface";
import { MutationsTypes } from "./mutationsTypes";

interface ICtx {
    commit: Commit;
    state: UserModuleTypes;
}
export default {
    [MutationsTypes.setTodo]({ commit }: ICtx, payload: UserModuleTypes): void {
        commit(MutationsTypes.setTodo, payload);
    },
};
