import { feeds} from "./feed.js";
if(!feeds)
    {
        feeds = [ ];
    }

   let need = document.querySelector('.Container');

   feeds.forEach((feed) => {
        need.innerHTML += `<p class="fee">${feed.feedback}</p>`;
        console.log(feed.feedback);
       

   });

console.log(feeds);