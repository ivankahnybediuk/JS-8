
// 1. Создать страницу, которая выводит нумерованный список песен:
let playList = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN",song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD",song:"FREE BIRD"},
    {author: "DEEP PURPLE",song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX",song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC",song:"BACK IN BLACK"},
    {author: "QUEEN",song:"WE WILL ROCK YOU"},
    {author: "METALLICA",song:"ENTER SANDMAN"}
];
let list = document.getElementById("playList");
let html=`<ol>`;
for(let i=0; i<=playList.length-1; i++){
    html+=`<li> Author: ${playList[i]["author"]}, "${playList[i]["song"]}"`
}
html+=`</ol>`;
list.innerHTML=html;


// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
let showModalWindow = function(state){
    document.getElementById('modal_window').style.display='block';
    document.getElementById('filter').style.display='block';
};
let closeModalWindow = function(state){
    document.getElementById('modal_window').style.display="none";
    document.getElementById('filter').style.display="none";
};

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let clearColor=function(){
    document.getElementById('red_').style.backgroundColor = "black";
    document.getElementById('yellow_').style.backgroundColor = "black";
    document.getElementById('green_').style.backgroundColor = "black";
};
let changeColor =function(){
    for(let click = 1; click<=3; click++){
    switch(click){
    case 1:
        clearColor();
        document.getElementById('red_').style.backgroundColor = "red";
        break;
    case 2:
        clearColor();
        document.getElementById('yellow_').style.backgroundColor = "yellow";
        break
    case 3:
        clearColor();
        document.getElementById('green_').style.backgroundColor = "green";
        break
    }
}
}