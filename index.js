var items=document.getElementsByClassName('item');
var points=document.getElementsByClassName('point');
var goLastBtn=document.getElementsByClassName('golast')[0];
var goNextBtn=document.getElementsByClassName('gonext')[0];
var index=0;
var time=0;
/*主函数执行*/
var goindex=function(){
    clearindex();
    items[index].className='item active';
    points[index].className='point activep';
}
/*左转按钮点击事件*/
goLastBtn.addEventListener('click',function(){
    golast();
})
/*恢复每一个标签的class*/
var clearindex=function(){
    for(var i=0;i<items.length;i++)
    {
        items[i].className='item';
        points[i].className='point';
    }
}
/*向左转的函数*/
var golast=function(){
    if(index==0)
    {
        index=5;
    }
    else
    {
        index--;
    }
    time=0;
    goindex();
}
/*向右转的点击事件 */
goNextBtn.addEventListener('click',function(){
    gonext();
})
/*向右转函数 */
var gonext=function(){
    if(index<5)
    {
        index++;
    }
    else
    {
        index=0;
    }
    time=0;
    goindex();
}
/*每一个小点都添加一个鼠标移入事件 并执行函数*/
for(var i=0;i<points.length;i++)
{
    /*绑定点击事件 */
    /*points[i].addEventListener('click',function(){
        index=this.getAttribute('data-index');
        goindex();
    })*/
    /*绑定划入 */
    points[i].onmouseover=function(){
        index=this.getAttribute('data-index');
        goindex();
    }
}
/*轮播图定时器建立 */
var activeTime=setInterval(function(){
    time++;
    if(time==30)
    {
        gonext();
        time=0;
    }
},100)
/*鼠标移入停止轮播，删除定时器*/
document.getElementsByClassName('big-photo')[0].onmouseover=function(){
    clearInterval(activeTime);
};
/*鼠标移除恢复轮播,建立定时器*/
document.getElementsByClassName('big-photo')[0].onmouseout=function(){
    activeTime=setInterval(function(){
        time++;
        if(time==20)
        {
            gonext();
            time=0;
        }
    },100)
};