const text = document.getElementById("input");
const output = document.getElementById("list")
function add()
{
    if (text.value === '') 
    {
        alert("Add a Task !");
    }
    else 
    {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    text.value="";
}

list.addEventListener("click",function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
},false);
