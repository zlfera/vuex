import { ITodo } from "@/store/modules/todoList/interface";
import { TODO_STATUS } from "@/store/modules/todoList/interface";

import { useStore } from "@/store";
import { MutationsTypes } from "@/store/modules/todoList/mutationsTypes";
export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (value: number) => void;
    setStatus: (value: number) => void;
    setDoing: (value: number) => void;
}
interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (value: ITodo[]) => void;
}
function useTodo(): IUseTodo {
    const store = useStore();
    const { setLocalList, getLocalList } = useLocalStorage();
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO,
        };

        store.dispatch(`todoModule/${MutationsTypes.setTodo}`, todo);

        setLocalList(store.state.todoModule.list);
    }
    function setTodoList(): void {
        store.dispatch(
            `todoModule/${MutationsTypes.setTodoList}`,
            getLocalList()
        );
    }
    function removeTodo(value: number): void {
        store.dispatch(`todoModule/${MutationsTypes.removeTodo}`, value);
        setLocalList(store.state.todoModule.list);
    }
    function setStatus(value: number): void {
        store.dispatch(`todoModule/${MutationsTypes.setStatus}`, value);
        setLocalList(store.state.todoModule.list);
    }
    function setDoing(value: number): void {}
    return { setTodo, setTodoList, removeTodo, setStatus, setDoing };
}

function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem("todoList") || "[]");
    }
    function setLocalList(value: ITodo[]): void {
        localStorage.setItem("todoList", JSON.stringify(value));
    }
    return { getLocalList, setLocalList };
}
export { useTodo };
