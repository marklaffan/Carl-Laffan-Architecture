var project = document.getElementsByClassName("links") [0];
var resume = document.getElementsByClassName("links") [1];
var contact = document.getElementsByClassName("links") [2];

project.addEventListener("click", function(){
    document.getElementById("projects").classList.toggle("projectList");
});

resume.addEventListener("click", function(){
    document.getElementById("projects").classList.add("projectList");
});

contact.addEventListener("click", function(){
    document.getElementById("projects").classList.add("projectList");
});