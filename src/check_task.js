export function checkTask(item, arr) {
  if (arr[item].completed === false) {
    arr[item].completed = true;
    return arr;
  }
  arr[item].completed = false;
  return arr;
}

export function removeCompleted(arr) {
  const newList = arr.filter((obj) => obj.completed === false);
  return newList;
}