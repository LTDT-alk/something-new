
function elem(id){
    return document.getElementById(id)
}


para = elem("text");

addEventListener("mousemove", (e) => {
    para.innerHTML = `${e.clientX},${e.clientY}`
})
/*
addEventListener("keydown",(event) => {
    para.innerHTML += ` ${event.code}`
})
*/
