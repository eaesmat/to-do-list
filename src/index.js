import './style.css';
import {
  addTask, display, reOrder, store,
} from './crud.js';
import { removeCompleted } from './check_task.js';

let todo = [];

const element = document.createElement('div');
element.classList = 'todo-box';
document.body.appendChild(element);

const headerHolder = document.createElement('div');
headerHolder.classList = 'header-holder';
element.appendChild(headerHolder);

// const refresh = document.createElement('a');
// refresh.classList = 'fa fa-refresh header-icon';
// refresh.href = './index.html';
// headerHolder.appendChild(refresh);

const title = document.createElement('h1');
title.classList = 'header';
title.innerHTML = 'Today\'s To do';
headerHolder.appendChild(title);

const inputHolder = document.createElement('div');
inputHolder.classList = 'input-holder';
element.appendChild(inputHolder);

const input = document.createElement('input');
input.id = 'input';
input.placeholder = 'Add to your list...';
input.classList = 'input';
inputHolder.appendChild(input);

const enterIcon = document.createElement('i');
enterIcon.id = 'enter';
enterIcon.classList = 'fa fa-level-down enterIcon rotate';
inputHolder.appendChild(enterIcon);

const todoList = document.createElement('ul');
todoList.classList = 'form';
element.appendChild(todoList);

enterIcon.addEventListener('click', () => {
  addTask(todo, input.id, todoList);
  display(todo, todoList);
});

input.addEventListener('keydown', (pressed) => {
  if (pressed.key === 'Enter') {
    addTask(todo, input.id, todoList);
    display(todo, todoList);
  }
});

const footer = document.createElement('div');
footer.classList = 'footer';
element.appendChild(footer);

/// // delete all completed tasks
const listDelete = document.createElement('a');
listDelete.classList = 'delete';
listDelete.innerHTML = 'Clear all completed';
listDelete.addEventListener('click', () => {
  const clearedList = removeCompleted(todo);
  todo = [...clearedList];
  reOrder(todo);
  store(todo);
  display(todo, todoList);
});
footer.appendChild(listDelete);

/// / local storage
const localStoragetaskList = JSON.parse(localStorage.getItem('Task List'));
if (localStoragetaskList != null) {
  localStoragetaskList.forEach((element) => {
    todo.push(element);
  });
  display(todo, todoList);
}
