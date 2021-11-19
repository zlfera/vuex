import { SET_TODO } from "../store/modules/todoList/mutationsTypes";
import { IState, ITodo } from "@/store/modules/todoList/interface";
import { TODO_STATUS } from "@/store/modules/todoList/interface";

import { useStore } from "@/store";
export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}

function useTodo(): IUseTodo {
    const store = useStore();
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO,
        };
        console.log(store);

        store.dispatch(`todoModule/${SET_TODO}`, todo);
    }
    function setTodoList(): void {}
    function removeTodo(): void {}
    function setStatus(): void {}
    function setDoing(): void {}
    return { setTodo, setTodoList, removeTodo, setStatus, setDoing };
}

export { useTodo };
