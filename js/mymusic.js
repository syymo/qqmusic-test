window.onload=function(){
  slowArise();
  newWinLinks();
}
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
