import { IState, ITodo } from "@/store/modules/todoList/interface";
import { Commit } from "vuex";
import { MutationsTypes } from "./mutationsTypes";

interface ICtx {
    commit: Commit;
    state: IState;
}
export default {
    [MutationsTypes.setTodo]({ commit }: ICtx, payload: ITodo): void {
        commit(MutationsTypes.setTodo, payload);
    },
    [MutationsTypes.setTodoList]({ commit }: ICtx, payload: ITodo[]): void {
        commit(MutationsTypes.setTodoList, payload);
    },
    [MutationsTypes.removeTodo]({ commit }: ICtx, payload: number): void {
        commit(MutationsTypes.removeTodo, payload);
    },
    [MutationsTypes.setStatus]({ commit }: ICtx, payload: number): void {
        // payload: boolean
        commit(MutationsTypes.setStatus, payload);
    },
};
