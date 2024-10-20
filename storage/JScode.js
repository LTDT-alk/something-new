// code 1 -- stringPlay
/*
//character list
const char = [];

//character maker
function personCreator(name, relationship = ["neutral", 0], lovescore = ["not interested",0], tactics = ["random"], description= "") {
    var title = name.toLowerCase()
    this.name = name;
    this.relationship = relationship;
    this.lovescore = lovescore;
    this.tactics = tactics;
    this.description = description
    char[title] = this;
};
// characters
let arsene = new personCreator("Arsene", ["ally", 50], ["not interested", 0], ["indirect fighting"])
let carman = new personCreator("Carman")


//codices
const rList = [
    // relationship benchmarks    least -> greatest
    ["neutral", 0], /*[progress, score]*/
    ["ally", 50],
    ["enermy" -50], 
    ["friend", 110],
    ["enermy #1", -110]
];
const lList = [
    // love benchmarks    least -> greatest

    // [progress, score]
    ["not interested", 0],
    ["attracted", 90],
    ["disquested", -90],
    ["In Love", 240],
    ["reknown enermy", -240]
]
function rChange(score, progress, codex){
    if (score = 0){
        codex[0][0]
    }
    for (let i = 0; i <= rList.length-3; i += 2){
        var point1 = i + 1
        var point2 = i + 2
        if (score >= codex[point1][1]){
            progress = codex[point1][0]
        }
        if (score <= codex[point2][1]){
            progress = codex[point2][0]
        }
    }
    return progress
}
function rLimit(score, codex){
    var point1 = codex[codex.length - 2][1]
    var point2 = codex[codex.length - 1][1]
    if (score >= point1){
        score = point1
    }
    if (score <= point2){
        score = point2
    }
    return codex.length
}
function friendship({name: n, relationship: r}, points = 0, status = "is now"){
    var score = r[1] + points
    var cRel = rChange(score, r[0], rList)
    var cSco = rLimit(score, rList);
    return `${n} ${status} ${cRel} and your relationship is ${cSco}/100`
}
function affair({name: n, relationship: r}, points = 0, status = "is now"){
    return `my name is ${n} and my relationship is ${r[1]}/100`
}
console.log(affair(arsene, -110))
console.log(friendship(carman, 50))

// attack type
const attackType = {magic: {}}
// type maker
function type(name, weakness, strength, crit_chance){
    this.name = name;
    this.weakness = weakness;
    this.strength = strength;
    this.crit_chance = crit_chance;
    attackType[name] = this
}
// magic type maker
function magicType(name, weakness, strength, crit_chance){
    this.name = name;
    this.weakness = weakness;
    this.strength = strength;
    this.crit_chance = crit_chance;
    attackType.magic[name] = this
}
// attack list
const attacks = []
// attack Creator
function attackName(name, strength, type){
    var title = name.toLowerCase()
    this.name = name;
    this.strength = strength;
    this.type = type;
    attacks[title] = this;
}
function attack(level, attackName) {

}
// code 2 -- canvasPlay
/*
function elem(id){
    return document.getElementById(id)
}
const canvas = elem("image");

// check if code working
if (canvas.getContext){

    const a1 = canvas.getContext("2d");
    a1.fillStyle = "black";

    var x_position = 0; deltaX = 10;
    var y_position = 0; deltaY = 10;
    var frame = 0; order = 10;

    while (frame < 504) {
        setTimeout(() => {
            if (x_position > 200){
                deltaX = -10
            } else if (x_position < 0){
                deltaX = 10
            }
            if (y_position >= 200){
                deltaY = -10
            } else if (y_position < 0){
                deltaY = 10
            }

            x_position += deltaX;
            y_position += deltaY;

            a1.beginPath()
            a1.moveTo(x_position - deltaX, y_position - deltaY)
            a1.lineTo(x_position, y_position - deltaY)
            a1.lineTo(x_position, y_position)
            a1.fill();
            a1.closePath();
        }, 1000)
        frame++
    }
}
*/
// code 3 -- octagon maker
/*
const a1 = canvas.getContext("2d");
    a1.fillStyle = "aqua";

    var d0 = 150; d1 = 100; d2 = 50;;
    a1.beginPath();
    a1.moveTo(d0-d1, d0+d2);
    a1.lineTo(d0-d1, d0-d2);
    a1.lineTo(d0-d2, d0-d1);
    a1.lineTo(d0+d2, d0-d1)
    a1.lineTo(d0+d1, d0-d2);
    a1.lineTo(d0+d1, d0+d2)
    a1.lineTo(d0+d2, d0+d1)
    a1.lineTo(d0-d2, d0+d1)
    a1.closePath();
    a1.fill();
*/
// code 4 -- drawing on a mouse
/*
const para = elem("#text");
const canvas = elem('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight /2 ;

const ctx = canvas.getContext('2d');

function draw(x,y,x0 = 0,y0 = 0){
    ctx.beginPath();
    ctx.moveTo(x0, y0)
    ctx.lineTo(x,y);
    ctx.stroke();}

addEventListener("mousemove", (e) => {
    para.innerHTML = `${e.clientX},${e.clientY}`
    if (e.shiftKey)
    draw(e.clientX, e.clientY, x1, y1);
    x1 = e.clientX;
    y1 = e.clientY;
})

addEventListener("keydown",(event) => {
    para.innerHTML += ` ${event.code}`
})
*/

