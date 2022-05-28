<template>
<di>
{{ todo.title}} - {{todo.body}}
  <router-link :to="{name: 'todos.edit', params: { id: todo.identify}}">Editar</router-link>
  <a href="#" @click.prevent="deleteTodo" v-show="loading">Deletar</a>
</di>
</template>

<script>
import TodoService from '@/services/todos.services'
import {ref} from "vue";
export default {
  name: "TodoList",
  props: {
    todo: {
      require: true,
      type: Object,
    }
  },
  setup(props,{emit}){
    const loading = ref(true)
    const deleteTodo = () => {
      loading.value = false
      TodoService.deleteTodo(props.todo.identify)
      .then(() => emit('todoDeleted', props.todo))
      .finally(() =>  loading.value = true)
    }

    return {
      deleteTodo,
      loading
    }
  }
}
</script>

<style scoped>

</style>