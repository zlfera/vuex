<template>
  <div>
    <p>123</p>

    <input type="text" v-model="todoValue" @keyup="setTodoValue" />
    <TodoList :todoList="todoList" />
  </div>
</template>
<script lang="ts" setup>
import { ITodo } from "@/store/modules/todoList/interface";
import { PropType, ref } from "vue";

import { IUseTodo, useTodo } from "../../hooks";
import TodoList from "../todoList/TodoList.vue";
const { setTodo }: IUseTodo = useTodo();
const todoValue = ref<string>("");
const setTodoValue = (e: KeyboardEvent) => {
  if (e.key === "Enter" && todoValue.value.trim().length) {
    setTodo(todoValue.value);

    todoValue.value = "";
  }
};
defineProps({ todoList: Array as PropType<ITodo[]> });
// // return {
//   todoValue,
//   SetTodoValue,
// };
</script>
<style scoped></style>
