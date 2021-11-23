<template>
  <div>
    <input
      type="checkbox"
      :checked="item.status === statusState.FINISHED"
      @click="setStatus(item.id)"
    />
    <span :class="item.status === statusState.FINISHED ? 'line_through' : ''">{{
      item.content
    }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      v-if="item.status !== statusState.FINISHED"
      @click="setDoing(item.id)"
      :class="item.status === statusState.DOING ? 'doing' : 'willdo'"
    >
      {{ item.status === statusState.DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { ITodo, TODO_STATUS } from "@/store/modules/todoList/interface";

defineProps<{ item: ITodo }>();

const emit = defineEmits<{
  (event: "removeTodo", id: number): void;
  (event: "setDoing", id: number): void;
  (event: "setStatus", id: number): void;
}>();

const statusState = {
  DOING: TODO_STATUS.DOING,
  FINISHED: TODO_STATUS.FINISHED,
  WILLDO: TODO_STATUS.WILLDO,
};

const removeTodo = (id: number): void => {
  emit("removeTodo", id);
};
const setStatus = (id: number): void => {
  emit("setStatus", id);
};
const setDoing = (id: number): void => {
  emit("setDoing", id);
};
</script>

<style scope>
.line_through {
  text-decoration: line-through;
}
.doing {
  background-color: black;
  color: #ccc;
}
.willdo {
  background-color: orange;
  color: #ccc;
}
</style>
