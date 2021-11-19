<template>
  <div>
    <input type="text" v-model="todoValue" @keyup="setTodoValue" />
  </div>
</template>
<script lang="ts" setup>
//import { useStore } from "@/store";
import { ref } from "vue";

import { IUseTodo, useTodo } from "../../hooks";
//const store = useStore();
const { setTodo }: IUseTodo = useTodo();
const todoValue = ref<string>("");
const setTodoValue = (e: KeyboardEvent) => {
  if (e.key === "Enter" && todoValue.value.trim().length) {
    setTodo(todoValue.value);
    //store.dispatch("todoModule/set_todo", todoValue.value);

    todoValue.value = "";
  }
};

// // return {
//   todoValue,
//   SetTodoValue,
// };
</script>
<style scoped></style>
