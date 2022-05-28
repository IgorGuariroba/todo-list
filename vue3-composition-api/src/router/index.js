import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodosList from '@/views/Todos/TodosList.vue'
import TodosCreate from '@/views/Todos/AddTodo.vue'
import EditTodo from "@/views/Todos/EditTodo";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/tarefas',
    name:'todos.index',
    component: TodosList
  },
  {
    path:'/tarefas/add',
    name:'todos.create',
    component: TodosCreate
  },
  {
    path:'/tarefas/:id/edit',
    name:'todos.edit',
    component: EditTodo,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
