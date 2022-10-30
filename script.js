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
    const content =`
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
}

//listener del boton
btn.addEventListener("click", createTask);

const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far fa-check-square icon")
    i.classList.add("fa-check-square")
    i.classList.add("icon")
    return i;
}
















