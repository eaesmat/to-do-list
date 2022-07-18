const todoList = document.querySelector('.todo-list');

const createList = (list) => {
  todoList.innerHTML = '';
  list.forEach((el) => {
    const li = document.createElement('li');
    li.className = 'task';
    li.id = el.index;
    li.innerHTML = `<input type="checkbox" class="completed" ${el.completed ? 'checked' : !true}></i><input class="task-text" type="text" value="${el.description}"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can" id ="${el.index}"></i>`;
    todoList.appendChild(li);
  });
};

export default createList;
