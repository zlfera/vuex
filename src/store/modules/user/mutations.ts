import { SET_TODO } from "./actionTypes";
import UserModuleTypes from "./interface";

export default {
    [SET_TODO](state: UserModuleTypes, payload: UserModuleTypes): void {
        state.name = payload.name;

        console.log(state);
    },
};
