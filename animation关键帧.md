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
![image](71F8B2C207134645BCDD29E5A52591EA) </br>


一个小方块的移动例子
