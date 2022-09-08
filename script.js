var userInput = document.querySelector("#userinput");
var enter = document.querySelector("#enter");
var ul = document.querySelectorAll("ul")[0];

function inputLength() {
    if (userInput.value.length > 0) {
        return true;
    }
}

function addNewElement() {
    var todoDiv = document.createElement("div");
    var li = document.createElement("li");
    var newButton = document.createElement("button");
    todoDiv.classList.add("wrapper")
    newButton.classList.add("delbutton")
    li.classList.add("taskitem")
    newButton.appendChild(document.createTextNode("Delete"));
    todoDiv.append(li, newButton);
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(todoDiv);
    userInput.value= ""
    
}

function checkClick() {
    if (inputLength()) {
        addNewElement();
    }     
}

function checkKeyPress(event) {
    if (inputLength() && event.which === 13) {
        addNewElement();
    }
}

function doneTask(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done")
    }
}

function deleteTask(element) {
    if (element.target.className === "delbutton") {
        element.target.parentElement.remove();
    }
}


function listItemClick(element) {
    doneTask(element);
    deleteTask(element);
}

ul.addEventListener("click", listItemClick);

enter.addEventListener("click", checkClick);

userInput.addEventListener("keydown", checkKeyPress);

