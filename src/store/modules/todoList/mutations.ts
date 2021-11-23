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
        state.list = state.list.filter((item: ITodo) => item.id !== payload);
        // state.list.forEach((item: ITodo, index, arr: ITodo[]) => {
        //     if (item.id === payload) {
        //         arr.splice(index, 1);
        //     }
        // });
    },
    [MutationsTypes.setStatus](state: IState, payload: number) {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === payload) {
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO;
                        break;
                    case TODO_STATUS.WILLDO:
                        item.status = TODO_STATUS.FINISHED;
                        break;
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED;
                        break;
                    default:
                        break;
                }
            }
            return item;
        });
        // state.list.forEach((item: ITodo, index, arr: ITodo[]) => {
        //     if (item.id === payload) {
        //         // if (item.status === TODO_STATUS.FINISHED) {
        //         //     item.status = TODO_STATUS.WILLDO;
        //         // }
        //         item.status = TODO_STATUS.FINISHED;
        //     }
        // });
    },
    [MutationsTypes.setDoing](state: IState, payload: number): void {
        state.list.map((item: ITodo) => {
            if (item.status === TODO_STATUS.DOING) {
                item.status = TODO_STATUS.WILLDO;
            }
            if (item.id === payload) {
                item.status = TODO_STATUS.DOING;
            }
            return item;
        });
    },
};
