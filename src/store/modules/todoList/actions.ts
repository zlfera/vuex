import { IState, ITodo } from "@/store/modules/todoList/interface";
import { Commit } from "vuex";
import { SET_TODO } from "./mutationsTypes";
interface ICtx {
    commit: Commit;
    state: IState;
}
export default {
    [SET_TODO]({ commit }: ICtx, payload: ITodo): void {
        commit(SET_TODO, payload);
    },
};
