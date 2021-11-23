<template>
  <div>
    <h1>TodoList</h1>

    <TodoItem
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>
<script setup lang="ts">
import { IUseTodo, useTodo } from "@/hooks";
import { ITodo } from "@/store/modules/todoList/interface";

import TodoItem from "./TodoItem.vue";
const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();
defineProps<{ todoList: ITodo[] }>();
</script>
<style scoped></style>
