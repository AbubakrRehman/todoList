class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo(value) {
        let id = parseInt(Math.random()*1000).toString();
        const todo = { id: id, value: value }
        this.todos.push(todo);
    }

    updateTodo(idToUpdate, valueToUpdate) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === idToUpdate)
                return { id: idToUpdate, value: valueToUpdate }
            return todo;
        })
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {
            return todo.id !== id
        })
    }

    getTodos() {
        return this.todos
    }
}

