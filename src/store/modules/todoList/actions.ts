import { IState, ITodo } from "@/store/modules/todoList/interface";
import { Commit } from "vuex";
import { MutationTypes } from "./mutationsTypes";

interface ICtx {
    commit: Commit;
    state: IState;
}
export default {
    [MutationTypes.setTodo]({ commit }: ICtx, payload: ITodo): void {
        commit(MutationTypes.setTodo, payload);
    },
};
