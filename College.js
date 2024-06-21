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

        if(Number(feed.rank) >= Number(rank.value) - 500  && Number(feed.rank) <= Number(rank.value) + 500 )
            {

                if(category.value == feed.category && merit.value ==feed.exam )
                    {
                        if(seat.value == feed.gender)
                            {
                                section.innerHTML +=
                                 `<div class="box">
                                    <div class="p">
                                        <p class="p-1">Rank</p>
                                        <p class="p-1">College chosen</p>
                                        <p class="p-0">Branch</p>
                                        <p class="p-1">Batch(Inter)</p>
                                    </div>
                                    <div class="s">
                                        <p class="s-1">${feed.rank}</p>
                                        <p class="s-1">${feed.college}</p>
                                        <p class="s-0">${feed.branch}</p>
                                        <p class="s-1">${feed.batch}</p>
                                    </div>
                                   
                                  </div>
                                  <div class="reasonable">
                                    <p class="m">Reason:</p>
                                    <p class="sa">${feed.reason}</p>
                                  </div>
                                  <p class="infor">Remember that the category, gender and examination are same.</p>`;
                            }
                    }
            }
               
            

        
    });
})