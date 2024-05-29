document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('due-date').value;
    const category = document.getElementById('category').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.className = priority;
    li.innerHTML = `
        <span>${taskInput} - ${category} - ${dueDate}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    document.getElementById('task-list').appendChild(li);

    document.getElementById('task-input').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('due-date').value = '';
    document.getElementById('category').value = '';

    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('complete');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });
}