//Author: Israel Ruttenberg
// 11-19-2016
// C S 8 1

function problem1(){
document.getElementById("problem1").innerHTML = "Good Night World";
}
function problem2(){
    var strongArray = parent.document.getElementsByTagName("strong");
    for(var i = 0; i < strongArray.length ; i++){
        strongArray[i].style.color = "red"
    }
}