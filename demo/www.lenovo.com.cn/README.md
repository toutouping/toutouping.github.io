###兼容性问题

> 1.IE6 头部 '社交问题' 排版错位 ;
> 2.IE6 头部 .top .top-contain li:hover .drop-block 下拉框显示无效';
> 3.IE6 给inline-block 固定宽度;
> 3.IE6 :hover不生效
> 4.IE6 IE7 头部 '社交问题' z-index无效:http://www.zhangxinxu.com/wordpress/2009/12/ie6%E4%B8%8Bz-index%E7%8A%AF%E7%99%AB%E4%B8%8D%E8%B5%B7%E4%BD%9C%E7%94%A8bug%E7%9A%84%E5%88%9D%E6%AD%A5%E7%A0%94%E7%A9%B6/
> 5.IE 图片边框  img{border: none;}
> 7.IE6/IE7不识别display:inline-block属性 :{zoom: 1; *display: inline(*display: block)};
> 8.当  IE6下Div（一般情况下）高度或宽度与其他浏览器设相同的值，但是显示的效果却不同，不得不用hack来搞定，(1)这时可以在“出问题”的元素父级元素上设置高度或宽
度（与其他浏览器设相同的值），再加上一个overflow:hidden（有时可以不加）(2)一个floatleft 另外一边float:right;(3)父类:margin-right: -6px;
9.IE6 li:hover无效 http://blog.sina.com.cn/s/blog_a22183250100zvoi.html
10.ie6 fixed 无效;
