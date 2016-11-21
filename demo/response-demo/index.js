/**
 * Created by 老曹 on 2016/11/11 0011.
 */
//页面加载完成后执行
$(function(){
    changeSize();
    //窗体大小改变事件
    $(window).resize(function(){
        changeSize();
    });
    //窗体改变逻辑代码
    function changeSize(){
        var lnkLarge=$("#lnkLarge");
        //获取窗体的宽度
        var width=$(this).innerWidth();
        if(width<600){//窄屏
            if(lnkLarge.length!=0){
                lnkLarge.remove();//移除宽屏样式的引用
            }
        }else{//宽屏
            if(lnkLarge.length==0){
                  $("head").append('<link id="lnkLarge" href="index-large.css" rel="stylesheet">');
                //显示菜单项
                $(".menu-bar").show("slow");
            }
        }
    };
    //按钮点击事件
    $(".btn").click(function(){
        $(".menu-bar").toggle("slow");
    });
});
