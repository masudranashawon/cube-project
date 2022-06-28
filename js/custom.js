"use strict";
let makeButton = document.getElementById("make");
let cubeTop = document.getElementById("one");
let cubeLeft = document.getElementById("two");
let cubeRight =  document.getElementById("three");
let closecube = document.getElementById("closecube");
makeButton.addEventListener("click", createCube);
closecube.addEventListener("click", closeCube);
function createCube() {
        cubeTop.style.transform = "translate(0%,0%) rotate(-45deg) skew(15deg, 15deg) scale(1)";

        cubeLeft.style.transform = "translate(-45%,77%) rotate(15deg) skew(15deg, 15deg) scale(1)";

        cubeRight.style.transform = "translate(45%,77%) rotate(-15deg) skew(-15deg, -15deg) scale(1)";
};
function closeCube (){
        cubeTop.style.transform = "translate(0%, 80%) rotate(-45deg) skew(15deg, 15deg) scale(.8)";
        cubeLeft.style.transform = "translate(0%, 80%) rotate(-45deg) skew(15deg, 15deg) scale(.6)";
        cubeRight.style.transform = "translate(0%, 80%) rotate(-45deg) skew(15deg, 15deg) scale(.4)";
};
