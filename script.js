/*=========================================
ELECRA PROJECTS
Professional Website Script
=========================================*/

/*---------------------------------------
Sticky Header
---------------------------------------*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background="#ffffff";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});

/*---------------------------------------
Back To Top Button
---------------------------------------*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.pageYOffset > 400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*---------------------------------------
Smooth Navigation
---------------------------------------*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*---------------------------------------
Counter Animation
---------------------------------------*/

const counters=document.querySelectorAll(".counter-box h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const counterSection=document.querySelector(".counter");

if(!counterSection) return;

const position=counterSection.getBoundingClientRect().top;

if(position<window.innerHeight && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

let target=counter.innerText.replace("+","");

if(isNaN(target)) return;

let count=0;

const speed=25;

const update=()=>{

count++;

counter.innerText=count+"+";

if(count<target){

setTimeout(update,speed);

}

};

update();

});

}

});

/*---------------------------------------
Fade Animation
---------------------------------------*/

const reveals=document.querySelectorAll(

".service-card,.project-card,.why-box,.gallery-grid img,.about-image,.about-content"

);

function reveal(){

reveals.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-80){

box.style.opacity="1";

box.style.transform="translateY(0px)";

}

});

}

reveals.forEach(box=>{

box.style.opacity="0";

box.style.transform="translateY(60px)";

box.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

/*---------------------------------------
Gallery Hover
---------------------------------------*/

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.boxShadow="0 20px 40px rgba(0,0,0,.25)";

});

img.addEventListener("mouseleave",()=>{

img.style.boxShadow="none";

});

});

/*---------------------------------------
Current Year (Optional)
---------------------------------------*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

/*---------------------------------------
Console
---------------------------------------*/

console.log("ELECRA PROJECTS WEBSITE LOADED SUCCESSFULLY");
