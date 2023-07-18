// Select elements
const addedInput = document.getElementById("input");
const display = document.getElementById("display");
const button = document.getElementById("submit");
const sort = document.getElementById("sort");

let myArray = [];

button.addEventListener("click", function(event) {
  event.preventDefault();

  // Validate input
  if (addedInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let todo = localStorage.getItem("todo");
  if (todo == null) {
    myArray = [];
  } else {
    myArray = JSON.parse(todo);
  }

  // Check for duplicate task
  if (myArray.includes(addedInput.value)) {
    alert("Task already exists");
    return;
  }

  myArray.push(addedInput.value);
  addedInput.value = "";
  localStorage.setItem("todo", JSON.stringify(myArray));
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo == null) {
    myArray = [];
    alert("Enter your to-do list");
  } else {
    myArray = JSON.parse(todo);
  }

  display.innerHTML = "";
  myArray.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `
      <p>${task}</p>
      <button onclick="deleteTask(${index})" class="fa-sharp fa-solid fa-trash"></button>
    `;
    display.appendChild(taskElement);

    taskElement.addEventListener("click", function() {
        taskElement.style.textDecoration = "line-through";
    })
  });
}

function deleteTask(index) {
  let todo = localStorage.getItem("todo");
  myArray = JSON.parse(todo);
  myArray.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(myArray));
  displayTodo();
}

document.addEventListener("DOMContentLoaded", () => {
  displayTodo();
});

sort.addEventListener("click", function() {
  let todo = localStorage.getItem("todo");
  myArray = JSON.parse(todo);

  myArray.sort((a, b) => a.localeCompare(b));

  localStorage.setItem("todo", JSON.stringify(myArray));
  displayTodo();
});