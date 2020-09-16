var hr=new Date().getHours()
var min=new Date().getMinutes()
document.getElementById("hasbeen").innerHTML=hr + 
" hours and " + min + " minutes have passed today."
var hr=new Date().getHours()
var min=new Date().getMinutes()
var sec=new Date().getSeconds()
var DayHalf
if (hr<12){
    DayHalf="AM"
}
else{
    DayHalf="PM"
}
var ahr
if (hr%12==0) {
    ahr=12
}
else{
    ahr=hr
}
var amin
if (min<10) {
    amin="0"+min
}
else {
    amin=min
}
var asec
if (sec<10) {
    asec="0"+sec
}
else {
    asec=sec
}
document.getElementById("time").innerHTML="The current time is: "
+ ahr%12 + ":" + amin + ":" + asec + " " + DayHalf