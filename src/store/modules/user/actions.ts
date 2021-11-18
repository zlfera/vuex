import { Commit } from "vuex";

import { SET_TODO } from "./actionTypes";
import UserModuleTypes from "./interface";

interface ICtx {
    commit: Commit;
    state: UserModuleTypes;
}
export default {
    [SET_TODO]({ commit }: ICtx, payload: UserModuleTypes): void {
        commit(SET_TODO, payload);
    },
};
