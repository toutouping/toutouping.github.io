---
layout: post
title:  "浏览器兼容性问题总结-JS"
date:   2016-11-17 15:31:01 +0800
categories: web前端
tag: html/JS
---

* content
{:toc}

通过这段时间的学习和使用,总结了部分兼容性问题的处理方式.

### 1. document.formName.item(“itemName”) 问题 
说明：IE下,可以使用document.formName.item(“itemName”)或document.formName.elements[“elementName”]; 
Firefox下，只能使用document.formName.elements[“elementName”]。 
解决方法：统一使用document.formName.elements[“elementName”]。

### 2. 事件委托方法
IE：document.body.onload   =   inject;   //Function   inject()在这之前已被实现
Firefox：document.body.onload   =   inject();

13.cursor:hand   VS   cursor:pointer 
firefox不支持hand，但ie支持pointer
解决方法:   统一使用pointer

### 3. firefox与IE的父元素(parentElement)的区别
IE：obj.parentElement
firefox：obj.parentNode
解决方法:   因为firefox与IE都支持DOM,因此使用obj.parentNode是不错选择.
### 4.window.location.href问题
说明:IE或者Firefox2.0.x下,可以使用window.location或window.location.href;
Firefox1.5.x下,只能使用window.location. 
解决方法:使用window.location来代替window.location.href.

### 5.const问题
说明:Firefox下,可以使用const关键字或var关键字来定义常量;
IE下,只能使用var关键字来定义常量. 
解决方法:统一使用var关键字来定义常量.

### 6.集合类对象问题
说明:IE下,可以使用()或[]获取集合类对象;
Firefox下,只能使用[]获取集合类对象. 
解决方法:统一使用[]获取集合类对象.

### 7.innerText在IE中能正常工作，但是innerText在FireFox中却不行.   需用textContent。
解决方法:
```js
if(navigator.appName.indexOf("Explorer")   >   -1){
        document.getElementById('element').innerText   =   "my   text";
}   else{
        document.getElementById('element').textContent   =   "my   text";
}
```

说明：innerText在IE中能正常工作，但是innerText在FireFox中却不行. 需用textContent。 
解决方法：elem.innerText = elem.textContent = “值”

### 8. body问题
Firefox的body在body标签没有被浏览器完全读入之前就存在；而IE的body则必须在body标签被浏览器完全读入之后才存在.

### 9. 集合类对象问题 
说明：IE下,可以使用()或[]获取集合类对象;Firefox下,只能使用[]获取集合类对象。 
解决方法：统一使用[]获取集合类对象。

### 10. 自定义属性问题 
说明：IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性，Firefox下，只能使用getAttribute()获取自定义属性。 
解决方法：统一通过getAttribute()获取自定义属性，不过更推荐直接通过“点”运算符访问元素属性。

### 11. eval(“idName”)问题 
说明：IE下,可以使用eval(“idName”)或getElementById(“idName”)来取得id为idName的HTML对象，Firefox下只能使用getElementById(“idName”)来取得id为idName的HTML对象。 
解决方法：统一用getElementById(“idName”)来取得id为idName的HTML对象。

### 12. 变量名与某HTML对象ID相同的问题 
说明：IE下,HTML对象的ID可以作为document的下属对象变量名直接使用;Firefox下则不能.Firefox下,可以使用与HTML对象ID相同的变量名;IE下则不能。 
解决方法：使用document.getElementById(“idName”)代替document.idName，最好不要取HTML对象ID相同的变量名，以减少错误;在声明变量时，一律加上var,以避免歧义。

### 13. const问题 
说明：Firefox下,可以使用const关键字或var关键字来定义常量，IE下，只能使用var关键字来定义常量。 
解决方法：统一使用var关键字来定义常量。

### 14. input.type属性问题 
说明：IE下input.type属性为只读，但是Firefox下input.type属性为读写。 
解决方法：可以创建两个输入框，比如平时咱们有密码框，想通过把type为password的值改为text，IE下是不允许的。

### 15. window.event问题 
说明：window.event只能在IE下运行，而不能在Firefox下运行,这是因为Firefox的event只能在事件发生的现场使用。Firefox必须从源处加入event作参数传递。IE忽略该参数，用window.event来读取该event。 
解决方法： var e = e || window.event；

### 16. event.x与event.y问题 
说明：IE下，even对象有x,y属性,但是没有pageX，pageY属性；Firefox下，even对象有pageX，pageY属性，但是没有x,y属性。 
解决方法：使用var x = e.x ? e.x : e.pageX; 来代替IE下的event.x或者Firefox下的e.pageX；

### 17. event.srcElement问题 
说明： IE下,event对象有srcElement属性,但是没有target属性;Firefox下,even对象有target属性,但是没有srcElement属性。 
解决方法：使用obj(obj = event.srcElement ? event.srcElement : event.target;)来代替IE下的event.srcElement或者Firefox下的event.target，请同时注意event的兼容性问题。

### 18. body问题 
说明：Firefox的body在body标签没有被浏览器完全读入之前就存在；而IE的body则必须在body标签被浏览器完全读入之后才存在。

### 19. 样式单位问题 
说明：FireFox中设置HTML标签的style时，所有位置性和字体尺寸的值必须后跟px。这个ie也是支持的。 

### 20. 样式关键字冲突问题 
说明：CSS属性与JavaScript中的保留关键字命名相同，IE中style+属性，非IE中css+属性。

### 21. class属性冲突问题 
说明：class属性冲突，class是javascript中的保留关键字。

### 22. 年份获取问题 
说明：使用getFullYear替换getYear。

### 23. for属性冲突问题 
说明：lable标签的属性for冲突，在IE浏览器中getAttribute(“htmlFor”)，在非IE浏览器中getAttribute(“for”)。 
19、removeChild和removeNode的问题 
说明：appendNode在IE和Firefox下都能正常使用，但是removeNode只能在IE下用，FF支持removeChild。

### 24. 事件监听函数的问题 
说明：标准浏览器的写法addEventListener()和IE的写法attachEvent()。 
解决方法：判断addEventListener是否存在，如果存在则用否则用IE8以下的版本（含IE8）的绑定方法attachEvent，removeEventListener()和detachEvent()也是一样的用法。

### 25. 阻止事件冒泡 
说明： stopPropagation()和cancelBubble，前者是方法，是标准的写法，后者是属性，赋值true表示阻止，是IE的写法。 
解决方法：判断stopPropagation是否存在，如果存在则用标准写法否则则用IE的写法，不可反过来判断。 

### 26.阻止默认事件 
说明： preventDefault()和returnValue()前者标准写法，后者IE写法。 
解决方法：一般情况建议直接使用return false阻止，但和取消默认事件的含义是不同的。