window.addEventListener("scroll", ()=>{
    let header=document.querySelector("header");
    header.classList.toggle("header", window.scrollY>0);
});



let hamburguesa=document.querySelector(".cont-hamburguesa"),
ul=document.querySelector("ul"),
body=document.querySelector("body");




hamburguesa.addEventListener("click", (e)=>{
    e.stopPropagation();
    ul.classList.toggle("aparece-menu"); 
});

window.addEventListener("click",()=>{
    ul.classList.remove("aparece-menu");
});