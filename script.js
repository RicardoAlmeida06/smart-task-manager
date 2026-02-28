const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

// Carrega dados do LocalStorage ou inicia listas vazias
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

// 1. Função para ouvir a tecla ENTER
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
function renderTasks() {
    const taskTableBody = document.getElementById('taskTableBody');
    const completedTableBody = document.getElementById('completedTableBody');
    
    taskTableBody.innerHTML = '';
    completedTableBody.innerHTML = '';

    // Renderiza Pendentes
    tasks.forEach((task, index) => {
        const row = `
            <tr>
                <td>${task}</td>
                <td class="actions">
                    <button class="done-btn" onclick="completeTask(${index})">✔</button>
                    <button class="delete-btn" onclick="removeTask(${index})">🗑️</button>
                </td>
            </tr>
        `;
        taskTableBody.innerHTML += row;
    });

    // Renderiza Concluídas
    completedTasks.forEach((item, index) => {
        const row = `
            <tr>
                <td class="completed-text">${item.text}</td>
                <td>
                    <small>${item.date}</small>
                </td>
                <td class="actions">
                    <button class="delete-btn" onclick="removeCompletedTask(${index})">🗑️</button>
                </td>
            </tr>
        `;
        completedTableBody.innerHTML += row;
    });
}

// Função para apagar das concluídas
function removeCompletedTask(index) {
    completedTasks.splice(index, 1);
    saveAndRender();
}
function addTask() {
    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value);
        saveAndRender();
        taskInput.value = '';
    }
}

function completeTask(index) {
    const now = new Date();
    const dateStr = `${now.toLocaleDateString()} às ${now.toLocaleTimeString()}`;
    
    // Move para a lista de concluídas com objeto de data
    const doneTask = {
        text: tasks[index],
        date: dateStr
    };
    
    completedTasks.push(doneTask);
    tasks.splice(index, 1);
    saveAndRender();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    renderTasks();
}

renderTasks();