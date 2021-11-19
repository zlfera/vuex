import { ITodo } from "@/store/modules/todoList/interface";
import { TODO_STATUS } from "@/store/modules/todoList/interface";

import { useStore } from "@/store";
import { MutationsTypes } from "@/store/modules/todoList/mutationsTypes";
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

        store.dispatch(`todoModule/${MutationsTypes.setTodo}`, todo);
    }
    function setTodoList(): void {}
    function removeTodo(): void {}
    function setStatus(): void {}
    function setDoing(): void {}
    return { setTodo, setTodoList, removeTodo, setStatus, setDoing };
}

export { useTodo };
