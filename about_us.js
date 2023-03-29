window.onload = function () {
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let img_mid = document.getElementById("member_mid");
    let img_prev = document.getElementById("member_prev");
    let img_next = document.getElementById("member_next");
    let slogan = document.getElementsByClassName("selfIntro")[0];
    let name = document.getElementsByClassName("name")[0];
    let position = document.getElementsByClassName("position")[0];


    let textArr_slogan = ["「共享爸爸，大家都是好兒子」","「共享兒子，大家都是好爸爸」","「貓貓貓貓貓貓貓貓貓貓」","「鮮奶茶好喝！」","「哈哈，設計能力普通中上 」","「我真的不愛開會 」"];
    let textArr_name = ["謝宗翰 | 阿宗宗","李宗諺 | 宗宗","蘇品瑄 | 阿蘇光年","洪嘉臨 | 00","陳奕勛 | 陳旺旺","馬明惠 | ㄇㄇ惠"];
    let textArr_position =["工程師","工程師","工程師","工程師","設計師","設計師"];


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
        slogan.innerHTML = textArr_slogan[index];
        name.innerHTML = textArr_name[index];
        position.innerHTML = textArr_position[index];

    };

    next.onclick = function () {
        index++;
        if (index > imgArr_mid.length - 1) {index = 0;}
        img_mid.src = imgArr_mid[index];
        img_prev.src = imgArr_prev[index];
        img_next.src = imgArr_next[index];
        slogan.innerHTML = textArr_slogan[index];
        name.innerHTML = textArr_name[index];
        position.innerHTML = textArr_position[index];
    };
};