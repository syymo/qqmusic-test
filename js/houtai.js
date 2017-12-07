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

window.onload=function(){
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
