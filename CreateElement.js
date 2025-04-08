let btn=document.querySelector("button");
let int=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
    let li=document.createElement("li");
    li.innerText=int.value;
    let button=document.createElement("button");
    button.innerText="delete";
    // button.classList.add("delete");
    li.append(button);
 
    ul.appendChild(li);
})
let btns=document.querySelectorAll(".delete");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let ListItem=event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }
});
