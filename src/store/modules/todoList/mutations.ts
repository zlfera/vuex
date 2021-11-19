import { IState, ITodo } from "@/store/modules/todoList/interface";
import { MutationTypes } from "./mutationsTypes";

export default {
    [MutationTypes.setTodo](state: IState, payload: ITodo): void {
        state.list.unshift(payload);
        console.log(state.list);
    },
};
