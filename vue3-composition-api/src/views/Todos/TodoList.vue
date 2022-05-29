<template>
  <div class="caixa">
    <div>
      <input type="checkbox" :checked="completed" @change="toogleStatus">
      {{ todo.title }} - {{ todo.body }}
      <router-link :to="{name: 'todos.edit', params: { id: todo.identify}}"><i class="fas fa-edit"></i></router-link>
      <a href="#" @click.prevent="deleteTodo" v-show="loading"><i class="fas fa-trash-alt"></i></a>
    </div>
  </div>
</template>

<script>
import TodoService from '@/services/todos.services'
import {computed, ref} from "vue";

export default {
  name: "TodoList",
  props: {
    todo: {
      require: true,
      type: Object,
    }
  },
  setup(props, {emit}) {
    const completed = computed(() => props.todo.completed === 'S')
    const loading = ref(true)
    const deleteTodo = () => {
      loading.value = false
      TodoService.deleteTodo(props.todo.identify)
          .then(() => emit('todoDeleted', props.todo))
          .finally(() => loading.value = true)
    }

    const toogleStatus = () => {
      const todo = props.todo
      const params = {
        name: todo.title,
        description: todo.body,
        completed: !completed.value
      }

      TodoService.editTodo(props.todo.identify, params)
          .then(() => emit('todoUpdated', params))
    }

    return {
      deleteTodo,
      loading,
      completed,
      toogleStatus
    }
  }
}
</script>

<style scoped>
.caixa {
  display: grid;
}
</style>