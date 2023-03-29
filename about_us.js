window.onload = function () {
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let img_mid = document.getElementById("member_mid");
    let img_prev = document.getElementById("member_prev");
    let img_next = document.getElementById("member_next");
    let imgArr_mid = ["img_about_us/elementsidepage3_photomedium1.png", "img_about_us/elementsidepage3_photomedium2.png", "img_about_us/elementsidepage3_photomedium3.png", "img_about_us/elementsidepage3_photomedium4.png", "img_about_us/elementsidepage3_photomedium5.png", "img_about_us/elementsidepage3_photomedium6.png"];
    let imgArr_prev = ["img_about_us/elementsidepage4_photochange6.png", "img_about_us/elementsidepage4_photochange1.png","img_about_us/elementsidepage4_photochange2.png", "img_about_us/elementsidepage4_photochange3.png", "img_about_us/elementsidepage4_photochange4.png", "img_about_us/elementsidepage4_photochange5.png"];
    let imgArr_next = ["img_about_us/elementsidepage4_photochange2.png", "img_about_us/elementsidepage4_photochange3.png", "img_about_us/elementsidepage4_photochange4.png", "img_about_us/elementsidepage4_photochange5.png", "img_about_us/elementsidepage4_photochange6.png", "img_about_us/elementsidepage4_photochange1.png"];

    let index = 0;

    prev.onclick = function () {
        index--;
        if (index < 0) { index = imgArr_mid.length - 1; }
        img_mid.src = imgArr_mid[index];
        img_prev.src = imgArr_prev[index];
        img_next.src = imgArr_next[index];
    };

    next.onclick = function () {
        index++;
        if (index > imgArr_mid.length - 1) {index = 0;}
        img_mid.src = imgArr_mid[index];
        img_prev.src = imgArr_prev[index];
        img_next.src = imgArr_next[index];
    };
};