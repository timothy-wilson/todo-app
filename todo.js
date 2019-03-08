let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul")
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let spans = document.getElementsByTagName("span");

input.addEventListener("keypress", (keyPressed) => {
    if(keyPressed.which === 13){
        let li = document.createElement("li");
        let spanElement = document.createElement("span");

        let newTodo = input.value;
        input.value = "";

        spanElement.append("🗑️");
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();
    }
});

const deleteTodo = () => {
    for(let span of spans){
        span.addEventListener("click", () => {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener("click", (ev) => {
    if (ev.target.tagName === "LI") {
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