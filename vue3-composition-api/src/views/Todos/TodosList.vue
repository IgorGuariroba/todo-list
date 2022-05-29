<template>
  <hi>
    Lista de tarefas
    <router-link :to="{name: 'todos.create'}"><i class="fas fa-plus-square"></i></router-link>
  </hi>

  <div v-if="loading">
    Carregando as tarefas
  </div>
  <ul>
    <li v-for="todos in todos" :key="todos.identify">
      <TodoList :todo="todos"
                @todoDeleted="removeTodoList"
                @todoUpdated="todoUpdated"
      >
      </TodoList>
    </li>
  </ul>
</template>
<script>
import {onMounted, ref} from 'vue'
import TodoService from '@/services/todos.services'
import TodoList from "@/views/Todos/TodoList";
export default {
  name: 'TodosList',
  setup() {
    const todos = ref([])
    const loading = ref(false)
   onMounted(async () => {
     loading.value = true

     TodoService.getAll()
         .then(response => {
           todos.value = response.data.data
           console.log(todos);

         })
         .catch(error => {
           console.log(error)
         })
     .finally(() => loading.value = false)
   })

    const removeTodoList = (todo) => {
        todos.value.splice(
            todos.value.indexOf(todo),1
        )
    }

    const todoUpdated = (todo) =>{
        todos.value[todos.value.indexOf(todo)] = todo
    }

    return {
      todos,
      loading,
      removeTodoList,
      todoUpdated
    }

  },
  components: {
    TodoList
  }
}
</script>