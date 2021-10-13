const menu= document.getElementById("menu");
const body= document.querySelector("body");
const humburger = document.getElementById("humburger");
console.log(humburger);
humburger.addEventListener("click", function (){
    if(humburger.classList.contains("open")){
        body.classList.remove("no-scroll")
        menu.classList.remove("visible")
        humburger.classList.remove("open");
    }

   
    else{
        body.classList.add("no-scroll")
        menu.classList.add("visible")
        window.scrollTo(0, 0)
        humburger.classList.add("open");
        
    }
    
})