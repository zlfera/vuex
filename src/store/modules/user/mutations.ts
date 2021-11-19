import { MutationTypes } from "./mutationsTypes";
import UserModuleTypes from "./interface";

export default {
    [MutationTypes.setTodo](
        state: UserModuleTypes,
        payload: UserModuleTypes
    ): void {
        state.name = payload.name;
    },
};
