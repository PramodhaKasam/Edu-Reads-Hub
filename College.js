import { feeds } from "./feed.js";

console.log(feeds);

let rank = document.querySelector('.ranks');
let category =document.querySelector('.creed') ;
let merit = document.querySelector('.pool');
let seat = document.querySelector('.gend');
let section = document.querySelector('.cont');


let quit = document.querySelector('.show');
quit.addEventListener('click', () =>{
    feeds.forEach((feed)=> {

        if(Number(feed.rank) >= Number(rank.value) - 500  & Number(feed.rank) <= Number(rank.value) + 500 )
            {
                console.log("YES");
                section.innerHTML += `<p>${feed.rank}</P>`
            }

        
    });
})