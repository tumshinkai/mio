
function myFunction(){
    alert("Hello world")

    console.log("Hello world")

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "Change....";
    document.getElementById("header1").style.color = "#ffb300";

    var x=8;
    var y=20;
    var z=3;
    //หาค่าเฉลี่ย --> header2

    document.getElementById("header2").innerHTML =((x+y+z)/3).toFixed(2);

}



function linkFunction(){
// เพิ่ม counter 1
// ปรับขนาดตัวอักษรเพิ่มขึ้น 1
var y = parseInt(document.getElementById('result').innerText);
    document.getElementById('result').innerHTML = y+1;
}



function loveFunction(){
// เพิ่ม counter 10
// ปรับขนาดตัวอักษรเพิ่มขึ้น 5
var x = parseInt(document.getElementById('result').innerText);
    document.getElementById('result').innerHTML =x+10;
}

