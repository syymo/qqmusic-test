window.onload=function joinIn(){

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
