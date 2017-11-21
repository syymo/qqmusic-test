window.onload=function(){
  changeColor();
  newWinLinks();
  choosePicture();
  loadXMLDoc();
  slowArise();
  getTime();
  joinIn();
}


           /*鼠标触发背景颜色*/
function changeColor(){
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




            /*弹出注册框*/
function newWinLinks(){

    for(var i=0;i<document.links.length; i++){
      if(document.links[i].className=="newWin"){
        document.links[i].onclick=newWindow;
      }
    }
  }
  function newWindow(){
    var catWindow = window.open(this.href,"catWin","width=300,height=300");
    catWindow.focus();
    return false;
  }

             /*注册框验证*/
  function joinIn(){

  var name= document.getElementById("suerName");
  var elname=document.getElementById("user");

  var user= document.getElementById("suername");
  var eluser=document.getElementById("name");

  var pwd1= document.getElementById("passwd1");
  var elpwd1=document.getElementById("pwd1");

  var pwd2= document.getElementById("passwd2");
  var elpwd2=document.getElementById("pwd2");

  var email=document.getElementById("emailAddr");
  var elemail=document.getElementById("email");

  var bnt =document.getElementById("submit");


  name.addEventListener("blur",checkName);
  name.onfocus=checkfocusName;
  user.addEventListener("blur",checkUser);
  user.onfocus=checkfocusUser;
  pwd1.addEventListener("blur",checkPwd1);
  pwd1.onfocus=checkfocusPwd1;
  pwd2.addEventListener("blur",checkPwd2);
  pwd2.onfocus=checkfocusPwd2;
  email.addEventListener("blur",checkEmail);
  email.onfocus=checkfocusEmail;



  function checkfocusName(){
      elname.innerHTML="请输入昵称!";
  }
  function checkName(){
    if(name.value.length=" "){
      elname.innerHTML="昵称长度为空，请重新输入!";
    }
    else{
      elmane.innerHTML=" ";
    }
  }

  function checkfocusUser(){
    eluser.innerHTML="账号长度大于等于6位!"
  }
  function checkUser(){
    if(user.value.length<6){
      eluser.innerHTML="账号长度小于6位,请重新输入!";
    }
    else{
      eluser.innerHTML="";
    }
  }

  function checkfocusPwd1(){
    elpwd1.innerHTML="账号长度应该大于6位小于18位!";
  }
  function checkPwd1(){
    if(pwd1.value.length>6){
      if(pwd1.value.length<18){
        elpwd1.innerHTML="密码格式正确!";
      }
      else{
        elpwd1.innerHTML="密码大于18位!";
      }
    }
    else{
      elpwd1.innerHTML="密码小于6位!"
    }
  }
  function checkfocusPwd2(){
    elpwd2.innerHTML="密码应该和第一次输入相同!";
  }
  function checkPwd2(){
    if(pwd2.value==pwd1.value){
      elpwd2.innerHTML="两次密码输入相同!";
    }
    else{
      elpwd2.innerHTML="两次密码输入不相同!";
    }
  }

  function checkfocusEmail(){
    elemail.innerHTML="请输入xx@xx.com格式的邮箱!"
  }
  function checkEmail(){
    var temp = document.getElementById("emailAddr");
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(temp.value))
    {
      elemail.innerHTML="请输入有效的E_mail";
      myreg.focus();
      return false;}
  }
  bnt.onclick=function(){
    javascript:window.opener=null;
    window.open('','_self');window.close();
    }
}

      /*逐渐出来*/

  function slowArise(){
    var $p=$("h2");
    var $q=$("h3");
    var $w=$(".trigger-custom")
    $p.hide().each(function(index){
  	  $(this).delay(2000*index).fadeIn(2000);
    });
    $q.hide().each(function(index){
  	  $(this).delay(4000*index).fadeIn(4000);
    });
    $w.hide().each(function(index){
      $(this).delay(6000*index).fadeIn(6000);
    });

  }
    /*验证登录框*/
$(function(){
  $("#login").click(function(ev){
    ev.preventDefault();
    $.ajax({
      type: 'GET',
      url: "../data.html",
    success: function(result){
    var obj=$.parseJSON(result);
    var username=$("#username").val();
    var passwd=$("#passwd").val();
    if(username==obj.username){
    if(passwd==obj.passwd){
      alert("登录成功了");
      window.location.href="houtai.html";
    }
    else{
      alert("密码错误");
    }
    }else{
      alert("用户名错误");
    }
  },
  error:function(){
    alert("服务器错误，请检查您的网络 谢谢");
  }
    });
  })
})
        /*获取时间*/
  function getTime(){
    function startTime() {
      var data= new Date();
      var year= data.getFullYear();
      var month= data.getMonth()+1;
      var date= data.getDate();
      var day= data.getDay();
      var hour= data.getHours();
      var minute= data.getMinutes();
      var second= data.getSeconds();
      second=change(second);
      var arry=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
      var info=document.getElementById("info");
      info.innerHTML=year+"年"+month+"月"+date+"日"+ arry[day]+hour+":"+minute+":"+second;
      setTimeout(startTime,500);
    }
    setTimeout(startTime,500);

  }
  function change(i){
    if(i<10) {
      i="0"+i;
    }
    return i;
  }

/*随机图像*/
function choosePicture(){
  var theAd=0;
  var myPix=new Array(
    "../images/main_down1.jpg",
    "../images/main_down2.jpg",
    "../images/main_down3.jpg",
    "../images/main_down4.jpg",
    "../images/main_down5.jpg",
    "../images/main_down6.jpg",
    "../images/main_down7.jpg",
    "../images/main_down8.jpg",
    "../images/main_down9.jpg",
    "../images/main_down10.jpg",
    "../images/main_down11.jpg",
    "../images/main_down12.jpg",
    "../images/main_down13.jpg",
    "../images/main_down14.jpg",
    "../images/main_down15.jpg",
    "../images/main_down16.jpg");
  function choosePict(){
    var elmg=document.getElementsByClassName("adBanner1");
    for(var i=0;i<elmg.length; i++) {
    theAd=Math.floor (Math.random()*myPix.length);
    elmg[i].src=myPix[theAd];
    }
    rotate();
  }

  function rotate(){
  var elmg=document.getElementsByClassName("adBanner1");
  for(var i=0;i<elmg.length; i++) {
    theAd=Math.floor (Math.random()*myPix.length);
    elmg[i].src=myPix[theAd];
    theAd++;
    if(theAd == myPix.length){
    theAd=0;
  }
      }
  setTimeout(rotate,3*1000);
    }

}

                 /*Ajax局部刷新*/
  function loadXMLDoc()
  {
  var xmlhttp;
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            }
        }
    xmlhttp.open("GET","music.html",true);
    xmlhttp.send();
    }
