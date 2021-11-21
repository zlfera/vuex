<template>
  <div class="wrapper"></div>
  Vue3.0 + TypeScript
  <TodoInput :todoList="todoList" />
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import TodoInput from "./components/todoInput/TodoInput.vue";
import { useTodo } from "./hooks";
import { useStore } from "./store";
const store = useStore();

const { setTodoList } = useTodo();
onMounted(() => {
  setTodoList();
});
const todoList = computed(() => {
  return store.state.todoModule.list;
});
</script>
<style scoped></style>
