const completed = (e, tasks) => {
  if (e.target.className === 'completed') {
    // eslint-disable-next-line array-callback-return
    tasks.map((task) => {
      if (parseInt(e.target.parentNode.id, 10) === task.index) {
        task.completed = !task.completed;
      }
    });
  }
};

export default completed;