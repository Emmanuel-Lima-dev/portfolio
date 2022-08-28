window.addEventListener("scroll", ()=>{
    let header=document.querySelector("header");
    header.classList.toggle("header", window.scrollY>0);
});

let hamburguesa=document.querySelector(".cont-hamburguesa"),
ul=document.querySelector("ul");


hamburguesa.addEventListener("click", ()=>{
    ul.classList.toggle("aparece-menu");
});