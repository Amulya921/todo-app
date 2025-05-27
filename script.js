const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTask() {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    // Toggle completed state on click
    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);

    input.value = '';
    input.focus();
  }
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});