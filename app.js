const inputBox = document.querySelector(".input")
const taskList = document.querySelector(".items-list")

// define the function addTask()

function addTask(){
  // compare input value to an empty string
  if(inputBox.value === ""){
    alert("You must write something")
  }else{
    // create an li element, set the value to input value and append to list container
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    taskList.appendChild(li)

    // create a close icon to delete a task on the list.
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ""
  saveData()
} 

// add click event on the tasks to mark as checked, and also to remove
taskList.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()

  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
}, false)

// define a function to save to local storage
function saveData(){
  localStorage.setItem("data", taskList.innerHTML)
}
// define a function to show the task when page is refreshed
function showData(){
  taskList.innerHTML = localStorage.getItem("data")
}
showData()