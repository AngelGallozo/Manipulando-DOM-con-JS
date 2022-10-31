import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (event) =>{
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list  = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");
    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task");
    taskTitle.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(taskTitle);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

//listener del boton
btn.addEventListener("click", createTask);












