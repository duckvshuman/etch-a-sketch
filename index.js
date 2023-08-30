const drawing = document.querySelector(".drawing")

bloxsize = 16


for (let x=0; x < bloxsize; x++) {
    let gridline = document.createElement('div')
    gridline.classList.add('gridbox-line')

    // add box
    for (let y=0; y < bloxsize; y++) {
        let gridbox = document.createElement('div')
        gridbox.classList.add('gridbox')
        gridbox.addEventListener('mouseover', function (e) {e.target.style.background = 'black'})
        gridline.appendChild(gridbox)
    }

    drawing.appendChild(gridline)
}
