import './style.css';

const lists = [
  {
    description: 'Learn JavaScript',
    completed: false,
    index: 1,
  },
  {
    description: 'Join Microverse',
    completed: false,
    index: 2,
  },
  {
    description: 'Go for a walk',
    completed: false,
    index: 3,
  },
  {
    description: 'Take a rest',
    completed: false,
    index: 4,
  },
];

const listItem = () => {
  const listContainer = document.querySelector('.listContainer');
  const unorderedlist = document.createElement('ul');
  unorderedlist.className = 'listItems';
  listContainer.appendChild(unorderedlist);
  for (let i = 0; i < lists.length; i += 1) {
    const onelist = document.createElement('li');
    onelist.className = 'onelist';
    onelist.innerHTML = `
    <input class="checkbox" type="checkbox"/>
    <label id="${lists[i].index}" class="label">${lists[i].description} <i class="fa-solid fa-ellipsis-vertical fa-icon"></i></label>`;
    unorderedlist.appendChild(onelist);
  }
  return listContainer;
};
listItem();
