const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
let score = document.getElementById("score");

function updateScore(){
    let checked = document.querySelectorAll(".checked");
    let num_checked = checked.length;
    let all = document.querySelectorAll("li")
    let num_all = all.length;
    if (num_checked === 0 && num_all === 0){
        score.style.backgroundColor = "#00e1b1";
        document.getElementById("container").style.boxShadow = "0 0 50px 5px #00e1b1";
    }else if (num_checked === num_all && num_checked != 0){
        score.style.backgroundColor = "#30db01";
        document.getElementById("container").style.boxShadow = "0 0 50px 5px #30db01";
    }else{
        score.style.backgroundColor = "#ff4040";
        document.getElementById("container").style.boxShadow = "0 0 50px 5px #ff4040";
    }
    score.textContent = String(num_checked) + "/" + String(num_all);
}

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateScore();
    }
    inputBox.value = '';
}

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        updateScore();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        updateScore();
    }
}, false)