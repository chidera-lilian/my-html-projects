var span = document.getElementsByTagName("span");
var div = document.getElementsByClassName("product");
//var product = div.getElementsbyClassName("product")
console.log(div);
var l = 0;
span[1].onclick = ()=>{
    l++;
    for(var i of div) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";} //-740
        if (l==2) {i.style.left = "-960px";} //-1480
        if (l==3) {i.style.left = "-1440px";} //-2220
        if (l==4) {i.style.left = "-1920px";} //3500
        if (l>4) {l=4;}
    }
}

span[0].onclick = ()=>{
    l--;
    for(var i of div) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}