window.onload=function(){
    var left=document.querySelector(".left");
    var right=document.querySelector(".right");
    var slide=document.querySelector(".slide");
    var rightImg=document.getElementsByTagName('img')[1];


left.onmousemove=function(e){
   slide.style.display="block";
   right.style.display="block";

   var x=e.clientX-slide.offsetWidth/2;
   var y=e.clientY-slide.offsetHeight/2;


   var w=this.offsetWidth-slide.offsetWidth;
   var t=this.offsetHeight-slide.offsetHeight;
   if(x<0){
       x=0;
   }else if(x>w){
       x=w;
   }
   if(y<0){
    y=0;
}else if(y>t){
    y=t;
}

   slide.style.left=x+"px";
   slide.style.top=y+"px";
   //右侧图片移动方向和左侧鼠标移动方向相反，并且移动距离也不同
   rightImg.style.left=-(x*2)+"px";
   rightImg.style.top=-(y*2)+"px";




}


left.onmouseout=function(e){
    slide.style.display="none";
    right.style.display="none";
}
}