var allimg=document.images;
console.log(allimg)
function allimgtag(){
    for(i=0;i<=allimg.length-1;i++)
    {
        allimg[i].src=`./images/image${i}.jpg`
        allimg[i].style.width="400px"
        allimg[i].style.height="250px"
        allimg[i].style.backgroundColor="aqua"
        allimg[i].addEventListener("click",function(){

            document.getElementById("bigimage").style.display="flex"
        })
    }
}
allimgtag();

var globalSrc;
function passSrc(urlofimg){
    document.getElementById("bigimg").style.backgroundImage=`url(${urlofimg})`
    globalSrc=urlofimg;
}


//closewindow
function closewindow(){
    document.getElementById("bigimage").style.display="none"
    document.getElementById("container").style.display="none"
    document.getElementById("gallaryimageedit").style.display="none"

}
function openwindow(){
    document.getElementById("container").style.display="flex"
    document.getElementById("gallaryimageedit").style.display="flex"
    document.getElementById("picture").style.backgroundImage=`url(${globalSrc})`
}



function imageedit(){
    var blurvalue = document.getElementById("Blur").value;
    var brightnessvalue = document.getElementById("Brightness").value;
    var contrastvalue = document.getElementById("Contrast").value;
    var grayscalevalue = document.getElementById("Grayscale").value;
    var huerotatevalue = document.getElementById("Hue-rotate").value;
    var invertvalue = document.getElementById("Invert").value;
    var opacityvalue = document.getElementById("opacity").value;
    var saturatevalue = document.getElementById("saturate").value;
    var sepiavalue = document.getElementById("sepia").value;
    document.getElementById("picture").style.filter = `blur(${blurvalue}px) brightness(${brightnessvalue}%)
     contrast(${contrastvalue}%) grayscale(${grayscalevalue}%) hue-rotate(${huerotatevalue}deg)
     invert(${invertvalue}%) opacity(${opacityvalue}%) saturate(${saturatevalue}%) sepia(${sepiavalue}%)`

    var rotatez = document.getElementById("RotateZ").value;
    var rotatex = document.getElementById("RotateX").value;
    var rotatey = document.getElementById("RotateY").value;
    var scale = document.getElementById("Scale").value;
    var scalex = document.getElementById("ScaleX").value;
    var scaley = document.getElementById("ScaleY").value;
    var skew = document.getElementById("Skew").value;
    var skewx = document.getElementById("SkewX").value;
    var skewy = document.getElementById("SkewY").value;
    var translatex = document.getElementById("TranslateX").value;
    var translatey = document.getElementById("TranslateY").value;
    console.log(rotatez);
    document.getElementById("picture").style.transform = `rotate(${rotatez}deg) rotateX(${rotatex}deg)
    rotateY(${rotatey}deg) scale(${scale}) scaleX(${scalex})
    scaleY(${scaley}) skew(${skew}deg) skewX(${skewx}deg) skewY(${skewy}deg) translateX(${translatex}px) translateY(${translatey}px)`
}
