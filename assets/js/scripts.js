var project = document.getElementsByClassName("links") [0];
var resume = document.getElementsByClassName("links") [1];
var contact = document.getElementsByClassName("links") [2];
var lis = document.querySelectorAll("li");

project.addEventListener("click", function(){
    document.getElementById("projects").classList.toggle("projectList");
});

resume.addEventListener("click", function(){
    document.getElementById("projects").classList.add("projectList");
});

contact.addEventListener("click", function(){
    document.getElementById("projects").classList.add("projectList");
});

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
}
