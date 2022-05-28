<template>
<di>
{{ todo.title}} - {{todo.body}}
  <router-link :to="{name: 'todos.edit', params: { id: todo.identify}}">Editar</router-link>
  <a href="#" @click.prevent="deleteTodo">Deletar</a>
</di>
</template>

<script>
import TodoService from '@/services/todos.services'
export default {
  name: "TodoList",
  props: {
    todo: {
      require: true,
      type: Object,
    }
  },
  setup(props,{emit}){
    const deleteTodo = () => {
      TodoService.deleteTodo(props.todo.identify)
      .then(() => emit('todoDeleted', props.todo))
    }

    return {
      deleteTodo
    }
  }
}
</script>

<style scoped>

</style>