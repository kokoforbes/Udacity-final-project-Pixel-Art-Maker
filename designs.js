
// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');


function clearOldGrid() {
    //clear the old grid
    canvas.innerHTML = '';
}

function makeGrid() {
    let tr, td;
    //create table: (for loop runs from inside, then outside). create td, append to tr; create tr, tr to table(canvas).
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

function changeCellColor() {
    // code to check which TD is clicked, and change its color 
    canvas.addEventListener('click', function(e) {
        e.preventDefault();
        // my code to check using capital letters
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e){
    e.preventDefault();
    clearOldGrid();
    makeGrid();
    changeCellColor();
})