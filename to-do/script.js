const listContainer = document.getElementById("list-container");
const myInput = document.getElementById("myInput");

function addTask() {
  if(myInput.value === '') { }
  else {
    let li = document.createElement("li");
    li.innerHTML = myInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  myInput.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


/* submit */

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log('Enter key was pressed');

    addTask();
  }
});





