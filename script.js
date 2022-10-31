(()=>{
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

    const checkComplete = ()=>{
        const i = document.createElement("i");
        i.classList.add("far","fa-check-square","icon")
        i.addEventListener("click",completeTask)
        return i;
    }


    // Inmediately invoked function expression IIFE
    const completeTask = (event)=>{
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far')
    }

    const deleteIcon  = ()=>{
        const i = document.createElement('i');
        i.classList.add('fas','fa-trash-alt','trashIcon','icon');
        i.addEventListener('click',deleteTask);
        return i;
    }

    const deleteTask = (event)=>{
        const element = event.target.parentElement;
        element.remove();
    }
})();











