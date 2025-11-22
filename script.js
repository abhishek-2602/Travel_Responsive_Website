const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const color5 = document.getElementById("color5")

const generatebtn = document.getElementById("generate")

function getRandomColor(){
    let color = "#"+Math.floor(Math.random() * 16777215).toString(16)
    return color; 
}
function generatecolor(){
    color1.style.backgroundColor=getRandomColor()
    color2.style.backgroundColor=getRandomColor()
    color3.style.backgroundColor=getRandomColor()
    color4.style.backgroundColor=getRandomColor()
    color5.style.backgroundColor=getRandomColor()
}
generate.addEventListener("click",generatecolor)

generatecolor()
