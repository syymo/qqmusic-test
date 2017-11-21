window.onload=choosePict;

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
