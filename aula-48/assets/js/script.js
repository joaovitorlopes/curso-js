const inputTask = document.querySelector('.input-new-task');
const btnTask = document.querySelector('.btn-add-task');
const taskList = document.querySelector('.task-list');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus(); 
 }

function createBtnRemove(li) {
    li.innerText += ' ';
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Remove';
    btnRemove.setAttribute('class', 'remove');
    btnRemove.setAttribute('title', 'Remove this task');
    li.appendChild(btnRemove);
}

function saveTasks() {
    const liTasks = taskList.querySelectorAll('li');
    const listOfTasks = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Remove', '').trim();
        listOfTasks.push(textTask);
    }

    const tasksJSON = JSON.stringify(listOfTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    taskList.appendChild(li);
    clearInput();
    createBtnRemove(li);
    saveTasks();
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const element = e.target;
    
    if (element.classList.contains('remove')) {
        element.parentElement.remove();
        saveTasks();
    }
});

function loadSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const listOfTasks = JSON.parse(tasks);

    for (let task of listOfTasks) {
        createTask(task);
    }
}
loadSavedTasks();