import { IRootState } from "@/typings";
import { Module } from "vuex";
import actions from "./actions";
import { IState } from "./interface";
import mutations from "./mutations";
import state from "./state";

const todoModule: Module<IState, IRootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
};
export default todoModule;
