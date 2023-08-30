const drawing = document.querySelector(".drawing")


createGrid(17)

function createGrid(boxAmount) {
    drawing.replaceChildren()
    for (let x=0; x < boxAmount; x++) {
        let gridline = document.createElement('div')
        gridline.classList.add('gridbox-line')
    
        // add box
        for (let y=0; y < boxAmount; y++) {
            let gridbox = document.createElement('div')
            gridbox.classList.add('gridbox')
            gridbox.addEventListener('mouseover', function (e) {
                e.target.style.background = 'black'
            })
            gridline.appendChild(gridbox)
        }
    
        drawing.appendChild(gridline)
    }
}

function changeSize() {
    let value = prompt("How many squares do you want?", 16)
    if (!Number(value)) {
        alert("Input must be a number")
    }
    else if (value >= 100) {
        alert("You can't enter 100 or more")
    } else {
        
        createGrid(value)
    }
}
