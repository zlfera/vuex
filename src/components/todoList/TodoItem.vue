<template>
  <div>
    <input
      type="checkbox"
      :checked="item!.status === TODO_STATUS.FINISHED"
      @click="setStatus(item!.id)"
      :class="item!.status === TODO_STATUS.FINISHED ? 'line-through' : ''"
    />
    <span>{{ item!.content }}</span>
    <button @click="removeTodo(item!.id)">删除</button>
    <button
      v-if="item!.status !==TODO_STATUS.FINISHED"
      @click="setDoing(item!.id)"
      :class="item!.status ===TODO_STATUS.DOING ? 'doing' : 'willdo'"
    >
      {{ item!.status ===TODO_STATUS.DOING ? "正在做" : "马上做" }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { ITodo, TODO_STATUS } from "@/store/modules/todoList/interface";
import { useTodo } from "@/hooks";

defineProps({ item: Object as PropType<ITodo> });
const { setStatus, removeTodo, setDoing } = useTodo();
</script>

<style scope>
.line_throuth {
  text-decoration: line-through;
}
.doing {
  background-color: #cdcdcd;
  color: #ccc;
}
.willdo {
  background-color: orange;
  color: #ccc;
}
</style>
