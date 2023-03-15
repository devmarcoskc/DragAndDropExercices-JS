//Boxes--fix information:
let boxesInfo = {
    a: null,
    b: null,
    c: null
};

//Events:
document.querySelectorAll('.boxes').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.boxes--fix').forEach(boxes => {
    boxes.addEventListener('dragover', dragOver);
    boxes.addEventListener('dragleave', dragLeave);
    boxes.addEventListener('drop', drop);
});

document.querySelector('.first--container').addEventListener('dragover', secondDragOver);
document.querySelector('.first--container').addEventListener('dragleave', secondDragLeave);
document.querySelector('.first--container').addEventListener('drop', secondDrop);

//Functions Boxes:
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
};

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
};

//Functions Boxes--fix:
function dragOver(e) {
    if(e.currentTarget.querySelector('.boxes') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
};

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
};

function drop(e) {
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.boxes') === null) {
        let dragItem = document.querySelector('.boxes.dragging');
        e.currentTarget.appendChild(dragItem);
        updateInfo();
    }
};

//Functions first--container:
function secondDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function secondDragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function secondDrop(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.boxes.dragging');
    e.currentTarget.appendChild(dragItem);
    updateInfo();
}

//Logic functions:
function updateInfo() {
    
    document.querySelectorAll('.boxes--fix').forEach(boxes => {
        let dataName = boxes.getAttribute('data-name');
        if(boxes.querySelector('.boxes') !== null) {
            boxesInfo[dataName] = boxes.querySelector('.boxes').innerHTML;
        } else {
            boxesInfo[dataName] = null;
        }
    });

    if(boxesInfo.a == 1 && boxesInfo.b == 2 && boxesInfo.c == 3) {
        document.querySelector('.second--container').style.border = '4px solid green';
        document.querySelectorAll('.boxes--fix').forEach(boxes => {
            boxes.style.borderRight = 'none';
        })   
    } else {
        document.querySelector('.second--container').style.border = '1px solid white';
        document.querySelectorAll('.boxes--fix').forEach(boxes => {
            boxes.style.borderRight = '1px solid white';
        })  
    }

}