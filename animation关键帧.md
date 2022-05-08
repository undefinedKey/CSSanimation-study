# 简单使用

```css
main {
    width: 100px;
    height: 100px;
    background-color: #fff;
    animation-name: hd;
    animation-duration: 2s;
}

@keyframes hd {
    from {
        background-color: #fff;
    }

    to {
        background-color: #000;
    }
}
```

上面可以看到，我们直接使用 **@keyframes** 定义一个名为
**<font color="##dd0000">hd</font>** 的 **css** ，然后通过 **animation-name** 给绑定到这个动效里，但是要注意的就是要设置 **animation-duration** 也就是动画时间 </br>



##### 通过 @keyframes 我们可以得知动画是从 from 开始 到 to 结束，同时我们还有另一个写法：
```css
@keyframes hd {
    0% {
        transform: scale(1);
        background: white;
    }
    25% {
        transform: scale(2);
    }
    65% {
        transform: scale(1);
    }
    100% {
        background: #e74c3c;
    }
}
```
也就是可以逐个百分比去控制


# 移动的小方块
![image](https://note.youdao.com/yws/public/resource/9ac922d6ead4655248e2fd11c23dd104/71F8B2C207134645BCDD29E5A52591EA?ynotemdtimestamp=1652009278779)</br>
一个小方块的移动例子



# animation组合复用
```css
@keyframes hd {
    25% {
        transform: translateX(300px);
        background-color: #3498db;
    }

    50% {
        transform: translate(300px, 300px);
        background-color: #9b59b6;
        border-radius: 0;
    }

    75% {
        transform: translateY(300px);
        background-color: #ecf0f1;
    }

    25%,75% {
        border-radius: 50%;
    }
}
```
可以看到 **25%,75%** 的共同属性是可以实现复用的 

### 还有另外一种是多个动画组合使用

```css 
div {
    width: 100px;
    height: 100px;
    background-color: #2ecc71;
    animation-name: hd, back;
    animation-duration: 3s;
}

@keyframes hd {
    25% {
        transform: translateX(300px);
    }

    50% {
        transform: translate(300px, 300px);
    }

    75% {
        transform: translateY(300px);
    }
}

@keyframes back {
    25% {
        background-color: #2ecc71;
    }

    50% {
        background-color: #34495e;
    }

    75% {
        background-color: aqua;
    }
}
```

在动画时间上，其实和transition类似

### 还有一个属性重叠的问题比如 <font color="##dd0000">hd，back</font> 他俩有同一个相同的属性，这个时候，优先级就是 ==animation-name== 排在后面的优先级更高，所以就是 ==hd < back==



</br>
</br>
</br>

# 哪些属性才会生效呢？
### 有中间值的属性！
#### 什么才是有中间值的属性？
```css
border: 1px solid #2ecc71;
```
##### 可以看到 <font color="##dd0000">border</font> 中 1px 我们使用 animation 的时候如果设置为 2px 从 <font color="##dd0000">1 到 2</font> 的时候是有一个中间值的(1.1,1.2....) 但是如果我们把 solid(实线) 换成 dotted(虚线)

##### 从实线到虚线中间的阶段，没有中间值，所以也是不支持的，虽然可以看到变化，但是看不到动画效果


</br>
</br>
</br>

# 控制动画循环次数
```css
animation-iteration-count: 1;
```

## 1就是1次或者是 infinite 就是死循环



</br>
</br>
</br>

# 动画播放的四个方向
![image](https://note.youdao.com/yws/public/resource/9ac922d6ead4655248e2fd11c23dd104/0F933DCF2B5E471284FAFD62B34F0BB4?ynotemdtimestamp=1652009278779)
</br>
但总结起来，用了 **animation-direction: alternate;** 可以让动画变得更平滑
```css
/*  
    1.normal (默认模式)
    0-100
*/
animation-direction: normal;

/*  
    2.reverse (动画反向播放)
    100-0
*/
animation-direction: reverse;

/*  
    3.alternate (动画在奇数次正向播放，偶数次反向播放)
    (1,3,5) (2,4,6)
*/
animation-direction: alternate;

/*  
    4.alternate-reverse (动画在偶数次正向播放，奇数次反向播放)
    (2,4,6) (1,3,5) 
*/
animation-direction: alternate-reverse;
```

</br>
</br>
</br>

# 让动画延迟播放
```css
animation-delay: 2s;
```
动画延迟小例子
</br>
![image](https://note.youdao.com/yws/public/resource/9ac922d6ead4655248e2fd11c23dd104/4EC2582D40324E8B9A62EE35B133D5DD?ynotemdtimestamp=1652009278779)




</br>
</br>
</br>

# 贝塞尔曲线的使用
```css
animation-timing-function: cubic-bezier(.77, .51, .54, 1.6);
```
一共有五种默认的曲线样式，也可以自定义
![image](https://note.youdao.com/yws/public/resource/9ac922d6ead4655248e2fd11c23dd104/362C346CD9464D42B08BA84F42361911?ynotemdtimestamp=1652009278779)




</br>
</br>
</br>

# 步进动画(轮播图例子)
![image](https://note.youdao.com/yws/public/resource/9ac922d6ead4655248e2fd11c23dd104/012991B520544DAFA03297D984A849E1?ynotemdtimestamp=1652009278779)
```css
/* 让动画一帧一帧执行 */
animation-timing-function: steps(2, end);

/* 当鼠标悬停后停止动画 */
section:hover {
    animation-play-state: paused;
}
```


```html
<body>
    <main>
        <section>
            <div><img src="imgs/1.jpg"></div>
            <div><img src="imgs/2.jpg"></div>
        </section>
    </main>
</body>
```
```css
main {
    width: 400px;
    height: 200px;
    align-self: center;
    justify-content: center;
    overflow: hidden;
}

section {
    width: 800px;
    height: 200px;
    display: grid;
    grid-template: 1fr/repeat(2, 400px);
    
    animation-name: slide;
    animation-duration: 2s;
    animation-timing-function: steps(2, end);
    animation-iteration-count: infinite;
}

section:hover {
    animation-play-state: paused;
}

div {
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
}

@keyframes slide {
    to {
        transform: translateX(-800px);
    }
}
```


</br>
</br>
</br>

# 动画属性总结
```css
animation-name: ;
animation-duration: ;
animation-timing-function: ;
animation-direction: ;
animation-iteration-count: ;
animation-fill-mode: ;
animation-delay: ;
```
当然，也可以直接使用animation



