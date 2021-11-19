import { IState, ITodo } from "@/store/modules/todoList/interface";
import { SET_TODO } from "./actionTypes";
export default {
    [SET_TODO](state: IState, payload: ITodo): void {
        state.list.unshift(payload);
        console.log(state.list);
    },
};
