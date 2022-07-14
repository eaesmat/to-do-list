// Main container class - Array of Objects
class MyToDoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('todotasks')) ? JSON.parse(localStorage.getItem('todotasks')) : [];
  }
}

export default MyToDoList;