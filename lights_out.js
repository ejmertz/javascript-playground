// definition for shuffling starting state
function shuffle() {
    var is00 = Math.round(Math.random())
    if (is00==0) {
        document.getElementById("00").setAttribute("class", "off");
    }
    else {
        document.getElementById("00").setAttribute("class", "on")
    }
    var is01 = Math.round(Math.random())
    if (is01==0) {
        document.getElementById("01").setAttribute("class", "off");
    }
    else {
        document.getElementById("01").setAttribute("class", "on")
    }
    var is02 = Math.round(Math.random())
    if (is02==0) {
        document.getElementById("02").setAttribute("class", "off");
    }
    else {
        document.getElementById("02").setAttribute("class", "on")
    }
    var is03 = Math.round(Math.random())
    if (is03==0) {
        document.getElementById("03").setAttribute("class", "off");
    }
    else {
        document.getElementById("03").setAttribute("class", "on")
    }
    var is10 = Math.round(Math.random())
    if (is10==0) {
        document.getElementById("10").setAttribute("class", "off");
    }
    else {
        document.getElementById("10").setAttribute("class", "on")
    }
    var is11 = Math.round(Math.random())
    if (is11==0) {
        document.getElementById("11").setAttribute("class", "off");
    }
    else {
        document.getElementById("11").setAttribute("class", "on")
    }
    var is12 = Math.round(Math.random())
    if (is12==0) {
        document.getElementById("12").setAttribute("class", "off");
    }
    else {
        document.getElementById("12").setAttribute("class", "on")
    }
    var is13 = Math.round(Math.random())
    if (is13==0) {
        document.getElementById("13").setAttribute("class", "off");
    }
    else {
        document.getElementById("13").setAttribute("class", "on")
    }
    var is20 = Math.round(Math.random())
    if (is20==0) {
        document.getElementById("20").setAttribute("class", "off");
    }
    else {
        document.getElementById("20").setAttribute("class", "on")
    }
    var is21 = Math.round(Math.random())
    if (is21==0) {
        document.getElementById("21").setAttribute("class", "off");
    }
    else {
        document.getElementById("21").setAttribute("class", "on")
    }
    var is22 = Math.round(Math.random())
    if (is22==0) {
        document.getElementById("22").setAttribute("class", "off");
    }
    else {
        document.getElementById("22").setAttribute("class", "on")
    }
    var is23 = Math.round(Math.random())
    if (is23==0) {
        document.getElementById("23").setAttribute("class", "off");
    }
    else {
        document.getElementById("23").setAttribute("class", "on")
    }
    var is30 = Math.round(Math.random())
    if (is30==0) {
        document.getElementById("30").setAttribute("class", "off");
    }
    else {
        document.getElementById("30").setAttribute("class", "on")
    }
    var is31 = Math.round(Math.random())
    if (is31==0) {
        document.getElementById("31").setAttribute("class", "off");
    }
    else {
        document.getElementById("31").setAttribute("class", "on")
    }
    var is32 = Math.round(Math.random())
    if (is32==0) {
        document.getElementById("32").setAttribute("class", "off");
    }
    else {
        document.getElementById("32").setAttribute("class", "on")
    }
    var is33 = Math.round(Math.random())
    if (is33==0) {
        document.getElementById("33").setAttribute("class", "off");
    }
    else {
        document.getElementById("33").setAttribute("class", "on")
    }
}

// definitions for all single bit flips below
function flip00() {
    if (document.getElementById("00").getAttribute("class")=="on") {
        document.getElementById("00").setAttribute("class", "off");
    }
    else if (document.getElementById("00").getAttribute("class")=="off") {
        document.getElementById("00").setAttribute("class", "on");
    }
}
function flip01() {
    if (document.getElementById("01").getAttribute("class")=="on") {
        document.getElementById("01").setAttribute("class", "off");
    }
    else if (document.getElementById("01").getAttribute("class")=="off") {
        document.getElementById("01").setAttribute("class", "on");
    }
}
function flip02() {
    if (document.getElementById("02").getAttribute("class")=="on") {
        document.getElementById("02").setAttribute("class", "off");
    }
    else if (document.getElementById("02").getAttribute("class")=="off") {
        document.getElementById("02").setAttribute("class", "on");
    }
}
function flip03() {
    if (document.getElementById("03").getAttribute("class")=="on") {
        document.getElementById("03").setAttribute("class", "off");
    }
    else if (document.getElementById("03").getAttribute("class")=="off") {
        document.getElementById("03").setAttribute("class", "on");
    }
}
function flip10() {
    if (document.getElementById("10").getAttribute("class")=="on") {
        document.getElementById("10").setAttribute("class", "off");
    }
    else if (document.getElementById("10").getAttribute("class")=="off") {
        document.getElementById("10").setAttribute("class", "on");
    }
}
function flip11() {
    if (document.getElementById("11").getAttribute("class")=="on") {
        document.getElementById("11").setAttribute("class", "off");
    }
    else if (document.getElementById("11").getAttribute("class")=="off") {
        document.getElementById("11").setAttribute("class", "on");
    }
}
function flip12() {
    if (document.getElementById("12").getAttribute("class")=="on") {
        document.getElementById("12").setAttribute("class", "off");
    }
    else if (document.getElementById("12").getAttribute("class")=="off") {
        document.getElementById("12").setAttribute("class", "on");
    }
}
function flip13() {
    if (document.getElementById("13").getAttribute("class")=="on") {
        document.getElementById("13").setAttribute("class", "off");
    }
    else if (document.getElementById("13").getAttribute("class")=="off") {
        document.getElementById("13").setAttribute("class", "on");
    }
}
function flip20() {
    if (document.getElementById("20").getAttribute("class")=="on") {
        document.getElementById("20").setAttribute("class", "off");
    }
    else if (document.getElementById("20").getAttribute("class")=="off") {
        document.getElementById("20").setAttribute("class", "on");
    }
}
function flip21() {
    if (document.getElementById("21").getAttribute("class")=="on") {
        document.getElementById("21").setAttribute("class", "off");
    }
    else if (document.getElementById("21").getAttribute("class")=="off") {
        document.getElementById("21").setAttribute("class", "on");
    }
}
function flip22() {
    if (document.getElementById("22").getAttribute("class")=="on") {
        document.getElementById("22").setAttribute("class", "off");
    }
    else if (document.getElementById("22").getAttribute("class")=="off") {
        document.getElementById("22").setAttribute("class", "on");
    }
}
function flip23() {
    if (document.getElementById("23").getAttribute("class")=="on") {
        document.getElementById("23").setAttribute("class", "off");
    }
    else if (document.getElementById("23").getAttribute("class")=="off") {
        document.getElementById("23").setAttribute("class", "on");
    }
}
function flip30() {
    if (document.getElementById("30").getAttribute("class")=="on") {
        document.getElementById("30").setAttribute("class", "off");
    }
    else if (document.getElementById("30").getAttribute("class")=="off") {
        document.getElementById("30").setAttribute("class", "on");
    }
}
function flip31() {
    if (document.getElementById("31").getAttribute("class")=="on") {
        document.getElementById("31").setAttribute("class", "off");
    }
    else if (document.getElementById("31").getAttribute("class")=="off") {
        document.getElementById("31").setAttribute("class", "on");
    }
}
function flip32() {
    if (document.getElementById("32").getAttribute("class")=="on") {
        document.getElementById("32").setAttribute("class", "off");
    }
    else if (document.getElementById("32").getAttribute("class")=="off") {
        document.getElementById("32").setAttribute("class", "on");
    }
}function flip33() {
    if (document.getElementById("33").getAttribute("class")=="on") {
        document.getElementById("33").setAttribute("class", "off");
    }
    else if (document.getElementById("33").getAttribute("class")=="off") {
        document.getElementById("33").setAttribute("class", "on");
    }
}

// refined shuffle function
function shuffle2(){
    var is00 = Math.round(Math.random())
    if (is00==0) {
        flipp00();
    }
    var is01 = Math.round(Math.random())
    if (is01==0) {
        flipp01();
    }
    var is02 = Math.round(Math.random())
    if (is02==0) {
        flipp02();
    }
    var is03 = Math.round(Math.random())
    if (is03==0) {
        flipp03();
    }
    var is10 = Math.round(Math.random())
    if (is10==0) {
        flipp010();
    }
    var is11 = Math.round(Math.random())
    if (is11==0) {
        flipp11();
    }
    var is12 = Math.round(Math.random())
    if (is12==0) {
        flipp12();
    }
    var is13 = Math.round(Math.random())
    if (is13==0) {
        flipp13();
    }
    var is20 = Math.round(Math.random())
    if (is20==0) {
        flipp20();
    }
    var is21 = Math.round(Math.random())
    if (is21==0) {
        flipp21();
    }
    var is22 = Math.round(Math.random())
    if (is22==0) {
        flipp22();
    }
    var is23 = Math.round(Math.random())
    if (is23==0) {
        flipp23();
    }
    var is30 = Math.round(Math.random())
    if (is30==0) {
        flipp30();
    }
    var is31 = Math.round(Math.random())
    if (is31==0) {
        flipp31();
    }
    var is32 = Math.round(Math.random())
    if (is32==0) {
        flipp32();
    }
    var is32 = Math.round(Math.random())
    if (is32==0) {
        flipp32();
    }
}

// functions for combined button flips (flipp)
function flipp00() {
    flip00(); flip01(); flip10();
}
function flipp01() {
    flip00(); flip01(); flip02(); flip11();
}
function flipp02() {
    flip01(); flip02(); flip03(); flip12();
}
function flipp03() {
    flip02(); flip03(); flip13();
}
function flipp10() {
    flip00(); flip10(); flip11(); flip20();
}
function flipp11() {
    flip01(); flip10(); flip11(); flip12(); flip21();
}
function flipp12() {
    flip02(); flip11(); flip12(); flip13(); flip22();
}
function flipp13() {
    flip03(); flip12(); flip13(); flip23();
}
function flipp20() {
    flip10(); flip20(); flip21(); flip30();
}
function flipp21() {
    flip11(); flip20(); flip21(); flip22(); flip31();
}
function flipp22() {
    flip12(); flip21(); flip22(); flip23(); flip32();
}
function flipp23() {
    flip13(); flip22(); flip23(); flip33();
}
function flipp30() {
    flip20(); flip30(); flip31();
}
function flipp31() {
    flip21(); flip30(); flip31(); flip32();
}
function flipp32() {
    flip22(); flip31(); flip32(); flip33();
}
function flipp33() {
    flip23(); flip32(); flip33();
}

// functions for alternate combined button flips (flippp)
function flippp00() {
    flip01(); flip10();
}
function flippp01() {
    flip00(); flip02(); flip11();
}
function flippp02() {
    flip01(); flip03(); flip12();
}
function flippp03() {
    flip02(); flip13();
}
function flippp10() {
    flip00(); flip11(); flip20();
}
function flippp11() {
    flip01(); flip10(); flip12(); flip21();
}
function flippp12() {
    flip02(); flip11(); flip13(); flip22();
}
function flippp13() {
    flip03(); flip12(); flip23();
}
function flippp20() {
    flip10(); flip21(); flip30();
}
function flippp21() {
    flip11(); flip20(); flip22(); flip31();
}
function flippp22() {
    flip12(); flip21(); flip23(); flip32();
}
function flippp23() {
    flip13(); flip22(); flip33();
}
function flippp30() {
    flip20(); flip31();
}
function flippp31() {
    flip21(); flip30(); flip32();
}
function flippp32() {
    flip22(); flip31(); flip33();
}
function flippp33() {
    flip23(); flip32();
}

//functions for more complicated flips (flipppp)
function flipppp00() {
    flip00(); flip01(); flip10(); flip11(); flip20(); flip21(); flip30(); flip31();
}
function flipppp01() {
    flip00(); flip01(); flip02(); flip03(); flip10(); flip11(); flip12(); flip13();
}
function flipppp02() {
    flip00(); flip02(); flip10(); flip12(); flip20(); flip22(); flip30(); flip32();
}
function flipppp03() {
    flip00(); flip01(); flip02(); flip03(); flip20(); flip21(); flip22(); flip23();
}
function flipppp10() {
    flip00(); flip02(); flip11(); flip13(); flip20(); flip22(); flip31(); flip33();
}
function flipppp11() {
    flip01(); flip02(); flip10(); flip13(); flip20(); flip23(); flip31(); flip32();
}
function flipppp12() {
    flip00(); flip03(); flip30(); flip33();
}
function flipppp13() {
    flip11(); flip12(); flip21(); flip22();
}
function flipppp20() {
    flip01(); flip11(); flip21(); flip22(); flip23();
}
function flipppp21() {
    flip01(); flip02(); flip03(); flip13(); flip23();
}
function flipppp22() {
    flip10(); flip20(); flip30(); flip31(); flip32();
}
function flipppp23() {
    flip10(); flip11(); flip12(); flip22(); flip32();
}
function flipppp30() {
    flip00(); flip01(); flip10();
}
function flipppp31() {
    flip00(); flip01(); flip02(); flip10(); flip11(); flip20();
}
function flipppp32() {
    flip01(); flip02(); flip10(); flip12(); flip22(); flip30();
}
function flipppp33() {
    flip00(); flip01(); flip02(); flip03(); flip10(); flip11(); flip12(); flip13();
    flip20(); flip21(); flip22(); flip23(); flip30(); flip31(); flip32(); flip33();
}