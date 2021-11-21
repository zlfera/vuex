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
import { PropType } from "vue";

import TodoItem from "./TodoItem.vue";
const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();
defineProps({
  todoList: Array as PropType<ITodo[]>,
});
</script>
<style scoped></style>
