let up = document.querySelector("#up")
up.addEventListener("click", ()=>{
    window.scrollTo(0,0)
})

window.addEventListener("scroll" , () =>{
    if(window.scrollY>=500) up.classList.remove("d-none")
        else up.classList.add("d-none")
})