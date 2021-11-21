import { IState, ITodo, TODO_STATUS } from "@/store/modules/todoList/interface";
import { MutationsTypes } from "./mutationsTypes";

export default {
    [MutationsTypes.setTodo](state: IState, payload: ITodo): void {
        state.list.unshift(payload);
    },
    [MutationsTypes.setTodoList](state: IState, payload: ITodo[]) {
        state.list = payload;
    },
    [MutationsTypes.removeTodo](state: IState, payload: number) {
        state.list.forEach((item: ITodo, index, arr: ITodo[]) => {
            if (item.id === payload) {
                arr.splice(index, 1);
            }
        });
    },
    [MutationsTypes.setStatus](state: IState, payload: number) {
        state.list.forEach((item: ITodo, index, arr: ITodo[]) => {
            if (item.id === payload) {
                item.status = TODO_STATUS.FINISHED;
            }
        });
    },
};
