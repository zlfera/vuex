import { IRootState } from "@/store/interface";
import { Module } from "vuex";
import actions from "./actions";
import UserModuleTypes from "./interface";
import mutations from "./mutations";
import state from "./state";
const userModule: Module<UserModuleTypes, IRootState> = {
    namespaced: process.env.NODE_ENV !== "production",
    state,
    actions,
    mutations,
};
export default userModule;
