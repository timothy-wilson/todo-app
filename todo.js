let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul")
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let trashcans = document.getElementsByClassName("delete");

input.addEventListener("keypress", (keyPressed) => {
    if(keyPressed.which === 13){
        let li = document.createElement("li")
        let listitem = document.createElement("span");
        let spanElement = document.createElement("span");

        let newTodo = input.value;
        input.value = "";

        spanElement.append("🗑️");
        listitem.append(newTodo);
        spanElement.classList.toggle("delete");
        listitem.classList.toggle("listitem")
        ul.appendChild(li).append(spanElement, listitem);

        deleteTodo();
    }
});

const deleteTodo = () => {
    for(let icon of trashcans){
        icon.addEventListener("click", () => {
            icon.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener("click", (ev) => {
    if (ev.target.classList.includes("listitem")) {
        ev.target.classList.toggle("checked");
    }
}, false);



saveBtn.addEventListener("click", () => {
    localStorage.setItem("todoList", ul.innerHTML);
});

clearBtn.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem("todoList", ul.innerHTML);
});

const loadTodo = () => {
    if(localStorage.getItem("todoList")){
        ul.innerHTML = localStorage.getItem("todoList");
        deleteTodo();
    }
}

loadTodo();
deleteTodo();