const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", () => {
    getTodos();
})

function createTodo() {

    addBtn.addEventListener('click', () => {
        
        console.log('Adding new todo...');

        // append to the todoList
        let todo = document.createElement('li');
        todo.textContent = input.value.trim();
        todoList.appendChild(todo);
        input.value = '';
        
        console.log(todo);
        console.log(todoList);
    })
}

createTodo();

function getTodos() {

    input.value = '';

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((todos) => {
            if (todos.ok) {
                console.log(todos);
            }
            return todos.json();
        })
        .then((todos) => {
            console.log("Excellent stuff!");

            todos.forEach(todo => {
                let listItem = document.createElement("li");
                listItem.textContent = todo.title;
                todoList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error:" + error);
        });
}