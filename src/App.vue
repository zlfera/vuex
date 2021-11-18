<template>
  <div class="wrapper"></div>
  Vue3.0 + TypeScript
  <TodoInput />
  <TodoList />
</template>
<script setup lang="ts">
import TodoList from "./components/todoList/Index.vue";
import TodoInput from "./components/todoInput/Index.vue";
</script>
<style scoped></style>
