//code for carousel
var span = document.getElementsByTagName("span");
console.log(span)
var carousel1 = document.getElementsByClassName("carousel-wrapper");
var carousel2 = document.getElementsByClassName("second-carousel")
var carousel3 = document.getElementsByClassName("carousel-five")
var l = 0;
span[1].onclick = function () {
    l++;
    for (var i of carousel1) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[0].onclick = ()=>{
    l--;
    for(var i of carousel1) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}

span[3].onclick = function () {
    l++;
    for (var i of carousel2) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[2].onclick = ()=>{
    l--;
    for(var i of carousel2) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}
span[5].onclick = function () {
    l++;
    for (var i of carousel3) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[4].onclick = ()=>{
    l--;
    for(var i of carousel3) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}

//code for fixed position
var header = document.querySelector(".navigation")
console.log(header)
var topAd = document.querySelector(".top-ad")
const help = document.querySelector("body")
console.log(help)
    // help.addEventListener("mouseover", function () {
    //     help.style.display = "none"
    // })
    // help.addEventListener("mouseout", function () {
    //     help.style.display = "flex"
    // })


// help.onscroll = function () {
//     header.style.position = "unset"
//     topAd.style.position = "fixed"
// }