import axios from "axios"

export  default class todoService {

    static async getAll(){
        return axios.get('/todos')
    }

    static  async addTodo(params){
        return axios.post('/todos',params)
    }

    static editTodo(id,param) {
        return axios.put(`/todos/${id}`,param)
    }

    static getTodo(id) {
        return axios.get(`/todos/${id}`)
    }

    static deleteTodo(id) {
        return axios.delete(`/todos/${id}`)

    }
}