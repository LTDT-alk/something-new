
function elem(id){
    return document.querySelector(id);
}

const para = elem("#text");
const canvas = elem('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight /2 ;

const ctx = canvas.getContext('2d');
function draw(x,y,x0 = 0,y0 = 0){
    ctx.beginPath();
    ctx.moveTo(x0, y0)
    ctx.lineTo(x,y);
    ctx.stroke();
}
var x1, y1;
addEventListener("mousemove", (e) => {
    para.innerHTML = `${e.clientX},${e.clientY}`
    if (e.shiftKey)
    draw(e.clientX, e.clientY-20, x1, y1);
    x1 = e.clientX;
    y1 = e.clientY-20;
})
/*
addEventListener("keydown",(event) => {
    para.innerHTML += ` ${event.code}`
})
*/
