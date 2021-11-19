import { IState, ITodo } from "@/store/modules/todoList/interface";
import { MutationsTypes } from "./mutationsTypes";

export default {
    [MutationsTypes.setTodo](state: IState, payload: ITodo): void {
        state.list.unshift(payload);
        console.log(state.list);
    },
};
