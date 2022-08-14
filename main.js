console.log(document.getElementById("hiring").checked);
document.querySelector(".hide-field").style.display="none";

    
document.getElementById("hiring").addEventListener("click",()=>{
    document.querySelector(".hide-field").style.display = "block";
})
document.getElementById("comment").addEventListener("click",()=>{
    document.querySelector(".hide-field").style.display = "none";
})

document.getElementById("question").addEventListener("click",()=>{
    document.querySelector(".hide-field").style.display = "none";
})
console.log("working");