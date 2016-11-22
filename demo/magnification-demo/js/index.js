$(function() {
    $("span img").hover(function() {
        var showImg = $(this).attr("src");
        $(".show img").attr("src", showImg);
    });
    

    //显示隐藏右边大图
    $(".show").hover(function() {
        $(".show-big").css("display", "inline-block");
        var imgBig = $(".show img").attr("src").replace("-small.jpg",".jpg");
    	$(".show-big img").attr("src",imgBig);
    },function(){
    	$(".show-big").css("display", "none");
    });

    //阴影随鼠标移动
    function move(e) {
        e = e || window.event;
        var x = e.clientX;
        var y = e.clientY;
//控制左右
        if (x <= 100) {
            $(".box").css({ "left": "0px" });
        } else if (x >= 300) {
            $(".box").css({ "left": "200px" });
        } else {
            $(".box").css({
                "left": x - 100
            });
        }
//控制上下
        if (y < 100) {
            $(".box").css({ "top": "0px" });
        } else if (y > 300) {
            $(".box").css({ "top": "200px" });
        } else {
            $(".box").css({
                "top": y - 100
            });
        }
//大图是小图的两倍,故以两倍的速度跟随鼠标移动即可
        $(".show-big img").css({
        	"top": -2*parseInt($(".box").css("top")),
        	"left": -2*parseInt($(".box").css("left"))
        })

    }
    $(".show").mousemove(move);




     
});
