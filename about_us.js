window.onload = function () {
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let img = document.getElementById("member");
    let info = document.getElementById("info");
    let imgArr = ["img_about_us/elementsidepage3_photomedium1.png", "img_about_us/elementsidepage3_photomedium2.png", "img_about_us/elementsidepage3_photomedium3.png", "img_about_us/elementsidepage3_photomedium4.png", "img_about_us/elementsidepage3_photomedium5.png", "img_about_us/elementsidepage3_photomedium6.png"];
    let index = 0;

    prev.onclick = function () {
        index--;
        if (index < 0) { index = imgArr.length - 1; }
        img.src = imgArr[index];
    };

    next.onclick = function () {
        index++;
        if (index > imgArr.length - 1) {index = 0;}
        img.src = imgArr[index];
    };
};