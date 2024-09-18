function smoothscroll(target, duration){
var target = document.querySelector(target);
var targetposition= target.getBoundingClientRect().top;
var startposition =window.pageYOffset;
var distance =targetposition-startposition;
var starttime =null;
function animation(currenttime){
    if(starttime===null){
        starttime=currenttime;
    }
var elapsedtime=currenttime-starttime;
var run=ease(elapsedtime,startposition,distance,duration);
window.scrollTo(0,run);
if(elapsedtime<duration){
    requestAnimationFrame(animation);
}
}
function ease(t,b,c,d){
    t/=d/2;
    if(t<1)return c/2*t*t+b;
    t--;
    return -c/2*(t*(t-2)-1)+b;
}
requestAnimationFrame(animation);
}
var sec1=document.querySelector('.classes');
var classes=document.querySelector('.classeslink');
var sec3=document.querySelector('.content');
var firstlink=document.querySelector('.story');

   sec1.addEventListener('click',function(){
   smoothscroll('.two',1800);
});
classes.addEventListener('click',function(){
    smoothscroll('.two',1800);
});
firstlink.addEventListener('click',function(){
    smoothscroll('.content',1800);
});
sec3.addEventListener('click',function(){
    smoothscroll('.classes',1800);
});

function scrollappear(){
    var cont=document.querySelector('.cont');
    var contposition=cont.getBoundingClientRect().top;
    var screenposition=(window.innerHeight)/1.3;

    if(contposition<screenposition){
        cont.classList.add('introappear');
    }
}
window.addEventListener('scroll',scrollappear);

function navslide(){
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navlinks=document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');

        navlinks.forEach(function(link,index){
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation='navlinkfade 1.5s ease forwards '+index/2+'s';
            }        
        })
burger.classList.toggle('toggle');
    });
}

navslide();
function playvideo(){
    const vid=document.querySelectorAll('.vid');
    const button=document.querySelector('.classes');

    vid.forEach((video)=>{
    button.addEventListener('click',function(){
        video.play();
    });
})
}
playvideo();