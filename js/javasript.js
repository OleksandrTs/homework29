"use strict";

function task1(){
    var playList = [
        {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
        },
        {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
        },
        {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
        },
        {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
        },
        {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
        },
        {
        author: "AC/DC",
        song:"BACK IN BLACK"
        },
        {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
        },
        {
        author: "METALLICA",
        song:"ENTER SANDMAN"
        }
    ];
    for(let song in playList){
        document.body.innerHTML += `<p>${+song + 1}. ` + `${playList[song].author}` +
                                    `: ` + `"${playList[song].song}"</p>`;
    }
}
task1();

function task2(){
    let btnOpen = document.getElementById("open"),
        btnClose = document.getElementById("close");
    function openModal(){
        document.getElementById("modal").style.display = "block";
    }
    function closeModal(){
        document.getElementById("modal").style.display = "none";
    }
    btnOpen.addEventListener("click", openModal);
    btnClose.addEventListener("click", closeModal);
    
};
task2();

function task3(){
    let bulb = 0;
    document.querySelectorAll(".light")[bulb].style.opacity = 1;
    document.getElementById("btn").addEventListener("click", switcher);
    function switcher(){
        if(bulb == 2){
            bulb = 0;
            document.querySelectorAll(".light")[bulb].style.opacity = 1;
            document.querySelectorAll(".light")[2].style.opacity = .1;
        } else {
            document.querySelectorAll(".light")[bulb].style.opacity = .1;
            document.querySelectorAll(".light")[bulb + 1].style.opacity = 1;
            bulb++;
        }
    };
};
task3();