  // 1. Select DOM elements
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    // 2. Add event listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTodo();
    });

    // 3. Logic to add a new task
    function addTodo() {
        const taskText = todoInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create elements
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        const deleteBtn = document.createElement('button');

        // Set values
        textSpan.textContent = taskText;
        deleteBtn.textContent = 'Delete';

        // Toggle text cross-out style on click
        textSpan.addEventListener('click', function() {
            if (textSpan.style.textDecoration === 'line-through') {
                textSpan.style.textDecoration = 'none';
            } else {
                textSpan.style.textDecoration = 'line-through';
            }
        });

        // Delete item logic
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        // Assemble and append elements
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        // Clear input
        todoInput.value = "";
    }
