var topButton=document.getElementsByClassName('top-small')[0];//点击按钮数组
var body=document.getElementsByClassName('aside-body')[0];
var bodyHidden=document.getElementsByClassName('container-fluid')[0];
var aside=document.getElementsByClassName('aside')[0];
var asideLIs=document.getElementsByClassName('aside-li');
var imgs=document.getElementsByClassName('aside-img');
var asideUls=document.getElementsByClassName('aside-ul');
var count=1;
var liIndex;
var countImg=[0,1,2,3,4,5];//定义一个三角箭头需要的数组

    /*给数组每一位赋值为0 */
    for(var i=0;i<countImg.length;i++)
    {
        countImg[i]=0;
    }


    /*给按钮绑定一个点击事件 */
    topButton.addEventListener('click',function(){
        /*第一次点击 */
        if(count==1)
        {
            body.className='aside-body small-show';
            aside.className='aside aside-show';
            count++;
        }
        /*第二次点击恢复 */
        else
        {
            body.className='aside-body small-hidden';
            aside.className='aside aside-hidden';
            count=1;
        }
    })
    if(count!=1)
    {
        bodyHidden.addEventListener('click',function(){
            body.className='aside-body small-hidden';
            aside.className='aside aside-hidden';
            count=1;
            })
    }


    /*点击三角箭头执行margin函数 */
    var tranActive=function(){
        
        imgs[liIndex].className='aside-ul1-img-active aside-img';
        asideUls[liIndex].className='aside-ul';
        switch(liIndex)
        {
            case "0":
                asideLIs[0].className='aside-li aside-li-active0';
                break;
            case "1":
                asideLIs[1].className='aside-li aside-li-active1';
                break;
            case "2":
                asideLIs[2].className='aside-li aside-li-active2';
                break;
            case "3":
                asideLIs[3].className='aside-li aside-li-active3';
                break;
            case "4":
                asideLIs[4].className='aside-li aside-li-active4';
                break;
            case "5":
                asideLIs[5].className='aside-li aside-li-active5';
                break;
        }
        
    }
  /*点击三角箭头恢li的margin函数 */
    var tranRecover=function(){
        
        imgs[liIndex].className='aside-ul1-img aside-img';
        asideUls[liIndex].className='aside-ul aside-ul-hidden';
        asideLIs[liIndex].className='aside-li';
        /*for(var j=0;j<asideLIs.length;j++)
        {
            asideLIs[j].className='aside-li';

        }*/

        
    }
    /*每个按钮绑定点击事件 */
     for(var i=0;i<imgs.length;i++)
     {
         imgs[i].addEventListener('click',function(){
             liIndex=this.getAttribute('data-aside-img');
             countImg[liIndex]++;
             /*第一次点击执行li的margin函数 */
             if(countImg[liIndex]==1)
             {
                 tranActive();
             }
             /*第二次点击恢复li的margin函数 */
             else
             {
                 countImg[liIndex]=0;
                 tranRecover();
             }
         })
     }
    



    




