window.onload = function () {
    var red = document.getElementsByClassName('turn_next')[0];
    var pic = document.getElementsByClassName('pc')[0];
    var li = pic.getElementsByTagName('li')[0];
    var picWidth = li.offsetWidth;


    red.onclick = function (event) {
        pic.style.transform = "translateX("+-picWidth+"px)";

    }
}