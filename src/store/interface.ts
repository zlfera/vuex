import { IState } from "@/store/modules/todoList/interface";
import UserModuleTypes from "@/store/modules/user/interface";

export interface AllStateTypes extends IRootState {
    userModule: UserModuleTypes;
    todoModule: IState;
}
export interface IRootState {}
