const drawing = document.querySelector(".drawing")


addBox(16)

function addBox(boxAmount) {
    drawing.replaceChildren()
    for (let i=0; i < boxAmount * boxAmount; i++) {
        const gridbox = document.createElement('div')
        gridbox.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black'
        })
        drawing.appendChild(gridbox)
    }
}

function editGrid(boxAmount) {
    drawing.setAttribute('style', `grid-template-columns: repeat(${boxAmount}, 2fr); grid-template-rows: repeat(${boxAmount}, 2fr);`)
    addBox(boxAmount)
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
