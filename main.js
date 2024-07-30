
function elem(id){
    return document.getElementById(id)
}
para = elem("text")

addEventListener("keydown",(event) => {
    para.innerHTML += ` ${event.code}`
})

