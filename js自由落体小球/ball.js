class Ball {
    // 设置小球对象
    // constructor(left, top, ballID) {
    //     this.ballID = ballID;   // 小球唯一id
    //     this.x = left;          // 小球的横坐标
    //     this.y = top;           // 小球的纵坐标
    //     this.g = 9.8;           // 重力加速度
    //     this.v = 0;             // 小球的速度
    //     this.isStop = false;    // 判断当前运动是否应该停止
    //     console.log(left, top, ballID)

    //     this.createBall();      // 创建小球的DOM


    //     let intervalSetting = window.setInterval(() => {
    //         this.move();
    //         if (this.isStop) {
    //             clearInterval(intervalSetting)
    //         }
    //     }, 1);
    // }


    // 创建小球
    // createBall() {
    //     // 创建一个div
    //     let ballDiv = document.createElement('div');
    //     // 更改ballDiv的id
    //     ballDiv.setAttribute('id', this.ballID);

    //     // 把刚刚创建好的ballDiv添加到bg里
    //     document.getElementById('bg').appendChild(ballDiv);

    //     // 获取刚刚创建好的小球
    //     let ballDom = document.getElementById(this.ballID);
    //     // 让这个div变成一个球
    //     ballDom.classList.add('ball');
    //     // y：小球的纵坐标
    //     ballDom.style.top = this.y + 'px';
    //     // x：小球的横坐标
    //     ballDom.style.left = this.x + 'px';
    // }
    // move() {
    //     // 0.001秒是setInterval的时间间隔，我将其看作是0.001秒内匀速运动

    //     if (this.y >= window.innerHeight - 50 && this.v > 0) {
    //         // 如果小球下降过程中接触到屏幕底部。小球反弹
    //         this.rebound();
    //     } else {
    //         // 自由落体
    //         // 公式：v = v0 + gt，1m = 3779.527559px，这里约等于4000
    //         this.v = this.v + this.g * 4000 * 0.001;
    //     }
    //     // 路程
    //     // 公式：s = s + vt
    //     this.y = this.y + this.v * 0.001;
    //     // 改变小球高度
    //     document.getElementById(this.ballID).style.top = this.y + 'px'
    // }

    constructor(left, top, ballID) {
        this.ballID = ballID; //小球的ID，为唯一标识符
        this.x = left; //小球的横坐标
        this.y = top; //小球的纵坐标
        this.g = 9.8; //重力加速度
        this.v = 0; //小球的速度
        this.isStop = false; //判断当前运动是否应该停止

        this.createBall(); //创建小球的DOM

        let intervalSetting = window.setInterval(() => { //这里使用箭头函数，函数的this指针问题需要注意一下。
            this.move();
            if (this.isStop) {
                clearInterval(intervalSetting);
            }
        }, 1);
    }
    createBall() {
        let ballDiv = document.createElement('div');
        ballDiv.setAttribute('id', this.ballID);
        document.getElementById('bg').appendChild(ballDiv);
        let ballDom = document.getElementById(this.ballID);
        ballDom.classList.add('ball');
        ballDom.style.top = this.y + 'px';
        ballDom.style.left = this.x + 'px';
    }
    move() {

        // 0.001秒是setInterval的时间间隔，我将其看作是0.001秒内的匀速运动

        if (this.y >= window.innerHeight - 50 && this.v > 0) { // 如果小球下降过程中接触到屏幕底部。小球的直径为50px
            this.rebound(); //小球反弹
        } else { //自由落体
            this.v = this.v + this.g * 4000 * 0.001; // 公式：v = v0 + gt, 1 m = 3779.527559 px，这里约等于4000
        }
        this.y = this.y + this.v * 0.001; // 公式：s = s + vt
        document.getElementById(this.ballID).style.top = this.y + 'px';
    }


}