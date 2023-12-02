function bold() {
    document.execCommand('bold', true, null);
}

function underline() {
    document.execCommand('underline', true, null);
}

function italic() {
    document.execCommand('italic', true, null);
}

function color() {
    console.log("Click");
    var clr = document.getElementById('color_select').value;

    document.execCommand('foreColor', false, clr);
    document.getElementById('color_selector').style.backgroundColor = clr;
}



function alignText(alignType) {
    return function () {
        document.getElementById('editor').style.textAlign = alignType;
        document.execCommand('justify' + alignType, true, null);
    }
}

var alignLeft = alignText('left');
var alignCenter = alignText('center');
var alignRight = alignText('right');
var alignJustify = alignText('justify');




document.querySelectorAll('.left').forEach(function (element) {
    element.addEventListener('click', alignLeft);
});


document.querySelectorAll('.center').forEach(function (element) {
    element.addEventListener('click', alignCenter);
});


document.querySelectorAll('.right').forEach(function (element) {
    element.addEventListener('click', alignRight);
});


document.querySelectorAll('.justify').forEach(function (element) {
    element.addEventListener('click', alignJustify);
});

var past = [];
var now = 0;

function saveState() {
    past.push({
        content: document.getElementById('editor').innerHTML,
        alignment: document.getElementById('editor').style.textAlign
    });
    now++;
}


function applyState() {
    document.getElementById('editor').innerHTML = past[now].content;
    document.getElementById('editor').style.textAlign = past[now].alignment;
}


function undo() {
    if (now > 0) {
        now--;
        applyState();
    }
}


function redo() {
    if (now < past.length - 1) {
        now++;
        applyState();
    }
}


document.querySelectorAll('#editor').forEach(function (element) {
    element.addEventListener('input', function () {
        saveState();
    });
});