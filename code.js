function show(num) {
document.getElementById('bigimg').src="http://www.alkchan.com/photoplaces/" + num + ".jpg";
document.getElementById('container').style.display = "none";
document.getElementById('viewer').style.display = "block";
}

function showtn() {
document.getElementById('container').style.display = "inline-grid";
document.getElementById('viewer').style.display = "none";

}