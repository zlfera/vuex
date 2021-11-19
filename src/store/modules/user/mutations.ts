import { MutationsTypes } from "./mutationsTypes";
import UserModuleTypes from "./interface";

export default {
    [MutationsTypes.setTodo](
        state: UserModuleTypes,
        payload: UserModuleTypes
    ): void {
        state.name = payload.name;
    },
};
