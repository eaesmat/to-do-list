import { checkTask } from './check_task.js';

export function check(arr, index) {
  if (arr[index].completed) return 'fa fa-check';
  return 'fa fa-square-o';
}

export function ifDone(arr, index) {
  if (arr[index].completed) return 'task done';
  return 'task';
}

export function ifCheckedTrash(arr, index) {
  if (arr[index].completed) return 'fa fa-trash icon trash visible';
  return 'fa fa-trash icon trash';
}

export function ifCheckedEdit(arr, index) {
  if (arr[index].completed) return 'fa fa-ellipsis-v edit hide';
  return 'fa fa-ellipsis-v edit';
}

export function store(arr) {
  localStorage.setItem('Task List', JSON.stringify(arr));
}

export function reOrder(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const { index } = arr[i];
    if (index !== i + 1) {
      arr[i].index = i + 1;
    }
  }
}

export function display(arr, parent) {
  parent.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const complete = check(arr, i);
    const done = ifDone(arr, i);
    const trashcheck = ifCheckedTrash(arr, i);
    const editCheck = ifCheckedEdit(arr, i);
    const item = document.createElement('li');
    item.classList = 'item input-holder';
    item.id = `item${i}`;
    item.innerHTML = `
                <i class=' checkbox ${complete} ' id = "check${i}"></i>
                <input id = "input${i}" type = "text" readOnly class="taskTitle ${done}" value = "${arr[i].description}" >
                <i class="${trashcheck}" id = "trash${i}" data-id = '${i}'></i>
                <i class="${editCheck}" id = "edit${i}"></i>`;
    parent.appendChild(item);
  }
  /// remove buttons
  const rmvBtnList = document.querySelectorAll('.trash');
  rmvBtnList.forEach((element) => {
    element.addEventListener('click', () => {
      arr.splice(element.dataset.id, 1);
      reOrder(arr);
      localStorage.setItem('Task List', JSON.stringify(arr));
      display(arr, parent);
    });
  });

  /// /   update task descriptions function
  function updateTask(arr, parent, id, positionID) {
    const updatedText = document.getElementById(id).value;
    if (updatedText !== '') {
      arr[positionID].description = updatedText;
      display(arr, parent);
    }
  }

  /// /  editing action event listener
  const editable = document.querySelectorAll('.edit');
  editable.forEach((element) => {
    element.addEventListener('click', () => {
      const itemId = (element.id).charAt((element.id).length - 1);
      for (let i = 0; i < arr.length; i += 1) {
        if (i !== itemId) {
          const editIcon = document.getElementById(`edit${i}`);
          const input = document.getElementById(`input${i}`);
          const trash = document.getElementById(`trash${i}`);
          const item = document.getElementById(`item${i}`);
          editIcon.classList.remove('rotate');
          trash.classList.remove('visible');
          item.classList.remove('bg-active');
          input.classList.remove('focused');
          input.readOnly = true;
        }
      }
      element.classList.toggle('rotate');
      const input = document.getElementById(`input${itemId}`);
      const trash = document.getElementById(`trash${itemId}`);
      const item = document.getElementById(`item${itemId}`);
      trash.classList.toggle('visible');
      item.classList.toggle('bg-active');
      input.readOnly = false;
      input.classList.toggle('focused');
      input.addEventListener('keydown', (pressed) => {
        if (pressed.key === 'Enter') {
          updateTask(arr, parent, `input${itemId}`, itemId);
          localStorage.setItem('Task List', JSON.stringify(arr));
          display(arr, parent);
        }
      });
    });
  });

  /// // check box event listener
  const checkboxList = document.querySelectorAll('.checkbox');
  checkboxList.forEach((item) => {
    item.addEventListener('click', () => {
      const itemId = (item.id).charAt((item.id).length - 1);
      checkTask(itemId, arr, parent);
      store(arr);
      display(arr, parent);
    });
  });
}

/// //////   addTask function
export function addTask(arr, id, parent) {
  if (document.getElementById(id).value !== '') {
    const record = {
      description: document.getElementById(id).value,
      completed: false,
      index: arr.length + 1,
    };
    arr.push(record);
    localStorage.setItem('Task List', JSON.stringify(arr));
    display(arr, parent);
    document.getElementById(id).value = '';
  }
}