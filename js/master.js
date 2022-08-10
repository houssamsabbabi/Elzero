

let timeCounter = setInterval(() => {
 let dateNow = new Date(); 
 let eventDate = new Date("2023-12-29 23:59:59")
 let requiredTime = (eventDate - dateNow); 
 
 let days = Math.floor(requiredTime/(1000*60*60*24)); 
 let hours = Math.floor((requiredTime % (1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((requiredTime % (1000*60*60))/(1000*60))
 let seconds = Math.floor((requiredTime % (1000*60))/(1000))

 document.querySelector(".event .chrono .days").innerHTML = days < 10 ? `0${days}`: days;
 document.querySelector(".event .chrono .hours").innerHTML = hours < 10 ? `0${hours}`: hours; 
 document.querySelector(".event .chrono .minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
 document.querySelector(".event .chrono .seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

}, 1000);