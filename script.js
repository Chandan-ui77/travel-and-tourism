// JavaScript for managing to-do list
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && taskInput.value.trim()) {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit task:', span.textContent);
            if (newText !== null && newText.trim()) {
                span.textContent = newText.trim();
            }
        });
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
});
