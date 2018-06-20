 function time(){
 var now=new Date();
var hour=document.getElementById("hours");
var minute=document.getElementById("minutes");
var second=document.getElementById("seconds");
hour.innerHTML=now.getHours().toString();
minute.innerHTML=now.getMinutes().toString();
second.innerHTML=now.getSeconds().toString();
}
setInterval(time,1000);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds())
