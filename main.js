// the end of the year Date to countdown 
// 1000 millisecond =1second

let countDownDate= new Date("Dec 31,2023 23:59:59").getTime();


let counter =setInterval(()=>{
    
    //Get Date Now \
    let datenow= new Date().getTime();
    
    //find the date difference between now and countdown
    
    let dateDiff= countDownDate - datenow ;
    
//get time unites 

// let days =Math.floor(dateDiff / 1000 / 60 / 60  /24) ;
let days =Math.floor(dateDiff / (1000 * 60 * 60 * 24)) ;
let hours=Math.floor((dateDiff %( 1000 * 60 * 60 * 24)) / (1000 * 60*  60));
let minutes =Math.floor(dateDiff%(1000*60*60)/(1000*60))
let seconds =Math.floor(dateDiff%(1000*60)/(1000))

console.log(minutes /1000 /60)
document.querySelector(".days").innerHTML=days< 10 ? `0${days}`:days;
document.querySelector(".hours").innerHTML=hours< 10 ? `0${hours}`:hours;
document.querySelector(".minutes").innerHTML=minutes< 10 ? `0${minutes}`:minutes;
document.querySelector(".seconds").innerHTML=seconds < 10 ? `0${seconds}`:seconds;



if(dateDiff<0){
    clearInterval(counter)
}

},1000)


let tnow=new Date();
document.querySelector("body .time-now").innerHTML = tnow;














