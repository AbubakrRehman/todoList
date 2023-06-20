const todo = new Todo();
const addButton = document.querySelector("#add-btn");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todolist-container");
const clearBtn = document.querySelector("#clear-btn");

addButton.addEventListener("click", (e) => {
    let value = todoInput.value;
    if (value !== "") {
        todo.addTodo(value);
        todoInput.value = "";
        renderList();
    }

});

todoInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let value = todoInput.value;
        todo.addTodo(value);
        todoInput.value = "";
        clearBtn.style.display = "none";
        renderList();
    }
    else if (e.target.value.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("clear-btn")) {
        todo.deleteTodo(e.target.id);
        renderList();
    }

});

todoList.addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("todoitem-input")) {
        e.target.removeAttribute("disabled");
        // renderList();
    }

});

clearBtn.addEventListener("click", (e) => {
    todoInput.value = "";
});


function emptyNode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function inputChangeHandler(event) {
    console.log("keys", event.key);
    if (event.key === "Enter") {
        todo.updateTodo(event.target.id, event.target.value);
        renderList();
    }
}

function renderList() {

    const todos = todo.getTodos();
    const todosLength = todos.length;

    emptyNode(todoList);

    if (todos.length === 0) {
        todoList.innerHTML = `<li><div>No items added yet !!</div></li>`;
        return;
    }

    todos.map((todo) => {
        const LI = document.createElement("li");
        LI.style.marginBottom = "30px";
        const INPUT = document.createElement("input");
        const SPAN = document.createElement("span");

        LI.classList.add("todo-item");
        INPUT.classList.add("todoitem-input");
        SPAN.classList.add("clear-btn");


        INPUT.type = "text";
        INPUT.value = todo.value;
        INPUT.setAttribute("disabled", "");
        INPUT.setAttribute("id", todo.id);
        INPUT.setAttribute("onKeyUp", "inputChangeHandler(event)");

        SPAN.setAttribute("id", todo.id);
        SPAN.innerText = "X";

        todoList.appendChild(LI);
        LI.appendChild(INPUT);
        LI.appendChild(SPAN);

    })



    //     let todoList_innerHTML = ""

    //     for (let i = 0; i < todosLength; i++) {
    //         const todo = todos[i];
    //         todoList_innerHTML += `<li class="todo-item">
    //     <input class="todoitem-input" type="text" value=${todo.value}>
    //     <span class="clear-btn">X</span>
    // </li>`
    //     }
    //     todoList.innerHTML = todoList_innerHTML;

}
