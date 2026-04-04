let links = document.querySelector(".main");
let hamborger = document.getElementById("hamborger");
let span = document.querySelectorAll(".hamborger span");
hamborger.addEventListener("click", function(){
    links.classList.toggle("active");
    hamborger.classList.toggle("active");
    if(span[0].style.backgroundColor === "white"){
        span[0].style.backgroundColor = "black";
        span[1].style.backgroundColor = "black";
        span[2].style.backgroundColor = "black";
    }else{
        span[0].style.backgroundColor = "white";
        span[1].style.backgroundColor = "white";
        span[2].style.backgroundColor = "white";
    }
});
