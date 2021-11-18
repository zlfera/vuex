import { IRootState } from "@/store/interface";
import { Module } from "vuex";
import actions from "./actions";
import { IState } from "./interface";
import mutations from "./mutations";
import state from "./state";

const todoModule: Module<IState, IRootState> = {
    state,
    mutations,
    actions,
};
export default todoModule;
