const inputBox = document.getElementById("input-box")
const listcon = document.getElementById("lest-contanir")


function addtask(){
   if(inputBox.value === ""){
    alert("You must write something!")
    
   } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listcon.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
   }

   inputBox.value=""
   savedata()
}

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      addtask(); 
    }
  });
  

listcon.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false)

function savedata(){
    localStorage.setItem("data" , listcon.innerHTML)
}

function showlist(){
    listcon.innerHTML = localStorage.getItem("data")
}
showlist()