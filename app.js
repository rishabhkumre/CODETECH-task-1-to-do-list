// app.js

// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for adding a new task
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the task text from input
    const taskText = todoInput.value.trim();

    if (taskText) {
        // Create a new task element
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add event listener for completing the task
        newTask.querySelector('.task-text').addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        // Add event listener for deleting the task
        newTask.querySelector('.delete-btn').addEventListener('click', function() {
            todoList.removeChild(newTask);
        });

        // Append the new task to the list
        todoList.appendChild(newTask);

        // Clear the input field
        todoInput.value = '';
    }
});
