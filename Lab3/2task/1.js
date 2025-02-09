const taskInput = document.getElementById("Task");
const addTaskBtn = document.getElementById("AddTask");
const todoList = document.getElementById("list");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "mark-done";
    checkbox.addEventListener("change", () => {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&#128465;"; 

    deleteBtn.addEventListener("click", () => {
        li.style.opacity = "0";
        setTimeout(() => li.remove(), 300);
    });

    const div = document.createElement("div");
    div.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(div);
    todoList.appendChild(li);

    taskInput.value = "";
});
