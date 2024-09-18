var sec=document.querySelector('.classes');
var button=document.querySelector('button');
var sec2=document.querySelector('.two');
if(sec){
 button.addEventListener('click',function(){
    window.scroll({
        top:1000,
        left:0,
        behavior:"smooth"
    });
})
}
if(sec2){
    sec2.addEventListener('click',function(){
    window.scroll({
        top:5000,
        left:0,
        behavior:"smooth"
    });
    })
}

