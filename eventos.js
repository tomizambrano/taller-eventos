document.addEventListener("DOMContentLoaded", () =>{

    let divButton = document.querySelector("div");
    let button = document.querySelector("button");

        divButton.addEventListener("click", () =>{
        alert("Hola!! Soy el div");
        });
        button.addEventListener("click", () =>{
        event.stopPropagation();
        alert("Holaaa, soy el botón!");
    });
});