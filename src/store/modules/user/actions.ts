import { Commit } from "vuex";
import UserModuleTypes from "./interface";
import { SET_TODO } from "./mutationsTypes";

interface ICtx {
    commit: Commit;
    state: UserModuleTypes;
}
export default {
    [SET_TODO]({ commit }: ICtx, payload: UserModuleTypes): void {
        commit(SET_TODO, payload);
    },
};
