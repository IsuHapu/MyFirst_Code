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
