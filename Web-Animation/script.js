
/********** web animation Website JavaScript **********/
/********** JavaScript Variables **********/
let main = document.querySelector('.body')
let canvas = document.getElementById('dots')
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let ctx = canvas.getContext('2d')
let dots = []

/********** JavaScript create Difference Array Value **********/
for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: '#605678'
    })
}

/********** JavaScript DrawDots **********/
const drawDots = () => {
    dots.forEach(dot =>{
        ctx.fillStyle = dot.color
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2)
        ctx.fill()
    })
}

/********** JavaScript DrawDots Function call **********/
drawDots()

/********** JavaScript Draw Web stroke **********/
main.addEventListener('mousemove',(event)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawDots()
    let mouse = {
        x: event.pageX - main.getBoundingClientRect().left,
        y: event.pageY - main.getBoundingClientRect().top
    }
    dots.forEach(dot =>{
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2)
        if(distance < 300){
            ctx.strokeStyle = dot.color
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
    })
})

/********** JavaScript Reset Web stroke **********/
main.addEventListener('mouseout',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawDots()
})

