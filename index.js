const drawing = document.querySelector(".drawing")
let mode = 'standard'

addBox(16)

function addBox(boxAmount) {
    drawing.replaceChildren()
    for (let i=0; i < boxAmount * boxAmount; i++) {
        const gridbox = document.createElement('div')
        gridbox.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black'
        })
        drawing.appendChild(gridbox)
    }
}

function editGrid(boxAmount) {
    drawing.setAttribute('style', `grid-template-columns: repeat(${boxAmount}, 2fr); grid-template-rows: repeat(${boxAmount}, 2fr);`)
    addBox(boxAmount)
    rainbow(false)
}

function changeSize() {
    const value = prompt("How many squares do you want?", 16)
    if (!Number(value)) {
        alert("Input must be a number")
    }
    else if (value > 100) {
        alert("You can't enter more than 100")
    } else { 
        editGrid(value)
    }
}

function rainbow(shouldChange) {
    if (shouldChange) {
        if (mode === 'standard') {
            mode = 'rainbow'
        } else if (mode === 'rainbow') {
            mode = 'standard'       
        }
    } 
    rainbowOrNot(mode)
}

function rainbowOrNot(value) {
    const drawingBox = drawing.querySelectorAll('div')
    if (value === 'rainbow') {
        drawingBox.forEach((box) => {
            box.addEventListener('mouseover', (e) => {
                e.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
            })
        })
    } else if (value === 'standard') {
        drawingBox.forEach((box) => {
            box.addEventListener('mouseover', (e) => {
                e.target.style.background = 'black'
            })
        })
    }
    
}

function clear() {
    const drawingBox = drawing.querySelectorAll('div')
    for(let i = 0; i<drawingBox.length; i++){
        drawingBox[i].style.background = "white";
    }
}