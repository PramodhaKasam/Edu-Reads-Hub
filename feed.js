export let feeds = JSON.parse(sessionStorage.getItem('feeds'));
if(!feeds)
    {
        feeds = [ ];
    }

function saveToStorage(){
    sessionStorage.setItem('feeds', JSON.stringify(feeds));
}

var r = document.querySelector('.rank');

var c = document.querySelector('#answer-2');

var g = document.querySelector('.gender');

var e = document.querySelector('.exam');

var o = document.querySelector('.college');

var f = document.getElementById('feed');

var a = document.getElementById('feeds');

var b =document.querySelector('.batch');

var d = document.querySelector('.branch');

document.querySelector('.set').addEventListener('click' , () =>{

    feeds.push({
        exam : e.value ,
        category: c.value ,
        rank : r.value,
        gender: g.value,
        college : o.value,
        branch : d.value,
        reason : a.value,
        batch : b.value,
        feedback : f.value
      })
   
      saveToStorage();

      e.value = c.value = g.value = "Select";
      r.value = o.value = f.value = o.value = a.value = d.value = b.value = ' ';

}) 


console.log(feeds);


