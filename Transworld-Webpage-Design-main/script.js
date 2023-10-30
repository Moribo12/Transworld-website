const button =document.getElementById("btn");
const list =document.getElementById("dropdown");

button.addEventListener("click",()=>{
    // alert("hello sir")

    // if (list.style.display="block"){
    //     list.style.display="none";
    // }
    // else{
    //     list.style.display="block";
    // }

    list.classList.toggle("active")
})