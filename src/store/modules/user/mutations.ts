import UserModuleTypes from "./interface";
import { SET_TODO } from "./mutationsTypes";

export default {
    [SET_TODO](state: UserModuleTypes, payload: UserModuleTypes): void {
        state.name = payload.name;
    },
};
