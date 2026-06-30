console.log("Portfolio Loaded");

document.addEventListener("DOMContentLoaded",()=>{

alert("Welcome to Sandhiya Portfolio");

});

const projects=document.querySelectorAll(".project");

projects.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.boxShadow=
"0 6px 15px rgba(0,0,0,0.2)";

});

project.addEventListener("mouseleave",()=>{

project.style.boxShadow=
"0 2px 10px rgba(0,0,0,0.1)";

});

});