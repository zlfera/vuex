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
};
