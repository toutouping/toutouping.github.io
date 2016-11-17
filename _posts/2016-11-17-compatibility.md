---
layout: post
title:  "浏览器兼容性问题总结-展示"
date:   2016-11-17 13:31:01 +0800
categories: web前端
tag: html/css
---

* content
{:toc}

通过这段时间的学习和使用,总结了部分兼容性问题的处理方式.

### 1. IE6浏览器的怪异解析现象
产生条件：IE6浏览器，当我们没有书写这个文档声明的时候，会触发IE6浏览器的怪异解析现象；
解决办法：书写文档声明。
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit">
    <meta name="keywords" content="" />
    <meta name="discription" content="" />
    <script type="text/javascript" src="statics/js/jquery-1.11.2.min.js"></script>
</head>
<body>
</body>
</html>
```
> 关于文档模式的更多了解 [doctype](http://frontenddev.org/link/do-you-know-what-a-doctype-what-document-model-is.html#heading-2-7) [HTML文档类型DTD与浏览器怪异模式](http://blog.csdn.net/freshlover/article/details/11616563)

### 2. 不同浏览器当中，很多的标签的默认样式不同
产生条件：采用不同的内核；
解决办法：利用CSS [global.css](http://codepen.io/toutouping/pen/QGGLNK)文件进行样式的清除，然后再根据需要进行设置。

### 3. IE6横向双倍外边距
产生条件：
1、没有设置display:inline的块元素
2、浮动元素
3、设置了水平外边距（浮动的方向和水平外边距设置的方向一致）
4、元素与父容器之间
解决办法： 在float标签的样式控制中加入display：inline

```html
<!DOCTYPE html>  
<html>  
<head>  
<meta charset="utf-8" />  
<title>IE6 双倍水平外边距</title>  
<style>  
*{  
    margin:0;  
    padding:0;  
}  
.testbox{  
    background:#CCC;  
    width:100px;  
    height:100px;  
    margin:10px 0 0 10px;  
    float:left;  
}
</style>  
</head>  
<body>  
<div class="testbox">IE6浮动双倍外边距</div><div class="testbox">IE6浮动双倍外边距</div>  
</body>  
</html>
```

> 备注：因为浮动都有其相对应的对象，只有相对于其父容器的浮动才会出现这样的问题。第一个元素是相对父容器的，而第二个是相对第一个兄弟元素的，所以第二个浮动元素不会出现双倍水平外边距问题。而且只有设置水平外边距的值才会出现双倍外边距，垂直外边距没有关系。

### 3. 行高溢出指定大小造成布局混乱的问题(IE6展示差异)
产生条件：IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度。[示例代码](http://codepen.io/toutouping/pen/NbbKLp)
解决办法：给超出高度的标签设置overflow：hidden；或者将文字的行高line-height设置为小于块的高度。

### 4.IE6 IE7 img外部的border
产生条件：img外部有a标签，即img标签有链接时
解决办法：设置img边框border:0;

### 5.默认间距
产生条件：标签间有空格
解决办法：
1.为img设置float的浮动布局方式。
2.解决inline-block元素的空白间距: 改变HTML的结构,消除标签间的空格;设置父元素的字体为“0”;同时使用重叠和设置字体大小 *  letter-spacing:-3px;font-size:0;
> Inline-block元素间有空格或是换行产生了间隙,空格符本质上就是个字符，与a,b,c,d这些字符是个同一个属性的东西，只是他是空格，透明的看不见而已（但可以选中）。所以，只要我们使用让文字宽度为0的那些方法，或者让文字水平方向上重叠（line-height是让文字垂直方向上负重叠）

### 6.经典3像素bug
产生条件：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距。
解决办法：设置非浮动元素浮动。

### 7.IE6 默认行高
产生条件：清除浮动的时候，使用一个空的div，然后为这个div设置{clear：both}。在IE6浏览器当中，div即使是空的，也会存在默认行高。
解决办法：设置其高度为0，并设置overflow:hidden。{height:0;overflow:hidden;clear:both;}

### 8.a标签hover不适用于所有标签
产生条件：IE6浏览器中hover只支持a标签的使用，不支持其它标签使用；
解决办法：合理用a标签嵌套其他行内标签或者用javascript模拟a的hover效果；

### 9.table标签当中border-color属性设置无效
产生条件：IE6中table设置属性border-color无效；
解决办法：运用CSS样式进行控制，而不是使用属性进行样式的处理。

### 10.png格式图片
产生条件：IE6浏览器，不支持透明；
解决办法：使用javascript进行处理；或者使用gif、jpg图像替代掉png图片的使用。
```js
DD_belatedPNG.fix('li , img');
```

### 11.透明rgba与opacity
产生条件：IE6不支持此两种透明的设置方法；
解决办法：使用IE6当中的滤镜filter替代掉，如：opacity:0.6;filter:alpha(opacity=60)。

### 12.子选择器在IE6中不能使用
产生条件：IE6浏览器，使用E>F子选择器；
解决办法：采用其他选择器或者采用后代选择器进行控制，如：div p{margin:10px;} div p p{margin:0;}替代掉 div>p{margin:10px;}。

### 13.不支持最大最小宽高
产生条件：IE6浏览器，标签的最低高度/宽度设置（min/max-height）
解 决办法：为IE6单独设置hack，即_height:最小高度值；_width：最小宽度值（对于IE6，当实际宽高超出定义的宽高时，元素会自动调整 宽高）。对于最大高度和最大宽度，没有必要设置兼容，当前对于开发者来说，只需要保证IE6下正常显示即可，无需在它身上花费太多功夫。

### 14.input 聚焦框颜色与样式不同
产生条件：各个浏览器表现不同；
处理方法：使用outline:none，清除默认样式之后再统一设置。

### 15.子标签无法撑开父标签的高度
产生条件：父标签内部含一个或多个子标签，父标签没有设置浮动，而子标签发生浮动；
处理方法：方法1：在子标签最后添加清除浮动的设置<div style='height:0;clear:both'></div>; 方法2：为父标签添加{overflow:hidden;}的样式； 方法3：为父标签设置固定高度。

### 16.li的间距问题
产生条件：IE6浏览器 li标签设置宽高，且li里面的元素发生了浮动；
处理方法：方法1：li不设置宽高； 方法2：li内部的标签不进行浮动。

### 17.行内元素布局混乱
产生条件：行内元素为包含框时，如果包含框包含的绝对定位元素以百分比为单位进行定位；
处理方法：在行内元素当中加入{zoom:1}，触发IE的hasLayout。关于hasLayout的更多介绍请参见日志：hasLayout IE浏览器bug的来源。

### 18.多显示一个字
产生条件：多个浮动元素中间夹杂HTML注释语句，浮动元素宽度设置为100%；则在下一行多显示一个上一行的最后一个字符；
处理方法：果断删掉注释！

### 19.CSS优先级 ！important
产生条件：IE6当中，在同一组CSS属性中，!important不起作用；
处理方法：单独设置。

### 20.img图片下部高度多余5px
产生条件：IE6浏览器；
处理方法：
1、将图片转换为块级对象
即，设置img为“display:block;”。

2、设置图片的垂直对齐方式
即设置图片的vertical-align属性为“top，text-top，bottom，text-bottom”也可以解决。

3、设置父对象的文字大小为0px
即，在代码中添加一行：“font-size:0;”可以解决问题。但这也引发了新的问题，在父对象中的文字都无法显示。就算文字部分被子对象括起来，设置子对象文字大小依然可以显示，但在CSS效验的时候会提示文字过小的错误。

4、改变父对象的属性
如果父对象的宽、高固定，图片大小随父对象而定，那么可以设置“overflow:hidden;”来解决。

5、设置图片的浮动属性
即在本例中增加一行CSS代码：img{float:left;}”。如果要实现图文混排，这种方法是很好的选择。
