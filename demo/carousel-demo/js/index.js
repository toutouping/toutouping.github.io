$(function() {
    //自动生成图片容器宽度
    var imgNum = $(".banner img").size();
    var imgWidth = $(".banner img").width();
    $(".banner").css({ "width": imgNum * imgWidth + "px" });

    //自动生成原点
    var sp = "<span></span>";
    var oldHtml = "";
    for (var i = 0; i < imgNum; i++) {
        oldHtml += sp;
    }
    $(".circle-btn").html(oldHtml);

    $("span").eq(0).css("background", "red");
    //图形按钮显示当前图片状态
    function showIndex(index) {
        for (var j = 0; j < imgNum; j++) {
            if (index == j) {
                $("span").eq(j).css("background", "red");
            } else {
                $("span").eq(j).css("background", "#0ff");
            }
        }
    }

    function doRight() {
        $(".right-btn").off('click');
        var rx = parseInt($(".banner").css("left"));
        var fx = -(imgNum - 1) * imgWidth;
        if (rx === fx) {
            $(".banner").animate({ "left": "0px" });
        } else {
            $(".banner").animate({ "left": rx - imgWidth + "px" });
        }
        var id = (rx - imgWidth) / (-imgWidth);
        id = id === imgNum ? 0 : id;
        showIndex(id);
        $(".right-btn").on('click', doRight);
    }

    function doLeft() {
        $(".left-btn").off('click');
        var lx = parseInt($(".banner").css("left"));
        if (lx === 0) {
            lx = -imgNum * imgWidth;
        }
        $(".banner").animate({ "left": (lx + imgWidth) + "px" });
        var id = (lx + imgWidth) / (-imgWidth);
        showIndex(id);
        $(".left-btn").on('click', doLeft);
    }
    //右按钮控制图片轮播
    $(".right-btn").on('click', doRight);

    //左按钮控制图片轮播
    $(".left-btn").on('click', doLeft);

    //圆形按钮控制轮播
    $(".circle-btn span").on('click', function() {
        var spanIndex = $(this).index();
        showIndex(spanIndex);
        $(".banner").animate({ "left": spanIndex * (-imgWidth) + "px" });
    });
})
