// file2.js
import {  toss, vanish, appear, remove_hidden_class,add_hidden_class, change_textContent, change_img_src } from '/assets/scripts/utilities.js';

const audio_coin_toss = new Audio("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/coin-sms-634.mp3");
const audio_coin_toss_win = new Audio("https://freetts.com/audio/22654fa4-2f83-4057-9e16-0673e427905b.mp3");
const audio_coin_toss_lose = new Audio("https://freetts.com/audio/d2af4455-48bb-44dd-8f72-277839b4736b.mp3");


let option=document.querySelectorAll(".option");
let option_div= document.querySelector(".options");
let result=document.querySelector(".result");
let next_btn=document.querySelector(".next-btn");


let functionhasrun=false

function toss_load(){
    if(functionhasrun==false)
    {
        functionhasrun=true;
        option.forEach((e)=>{
        e.addEventListener('click',()=>{
            audio_coin_toss.play();
            console.log("human",e.id);
            setTimeout(() => {
                const toss_result=toss(e.id);
                 if(toss_result)
            {
                console.log("Won")
                if(e.id==1)
                vanish(option_div.children[1]);
                if(e.id==2)
                vanish(option_div.children[0]);
                remove_hidden_class(result);
                remove_hidden_class(next_btn);
                audio_coin_toss_win.play();
            }
            
            else
            {
                console.log("Lost")
                if(e.id==1)
                vanish(option_div.children[0]);
                if(e.id==2)
                vanish(option_div.children[1]);
    
                change_textContent(result,'You Lost 😔');
                remove_hidden_class(result);
                remove_hidden_class(next_btn);
                audio_coin_toss_lose.play();
            }
              }, "1000");
            
           })
    })}

}

toss_load();

next_btn.addEventListener('click',()=>{
    location.reload();
})


