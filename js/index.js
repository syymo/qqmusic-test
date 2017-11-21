window.onload=function changeColor(){
  var nav=document.getElementById("nav-top");
  var li=nav.getElementsByTagName("li");
  for(var i=0;i<li.length;i++){
    li[i].onmouseover=function(){
      this.style.backgroundColor="#31c27c";
    }
    li[i].onmouseout=function(){
      this.style.backgroundColor="#fff";
    }
  }
}
