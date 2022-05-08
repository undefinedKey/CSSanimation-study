class Ball {
    constructor(left, top, ballID) {
        this.ballID = ballID; //小球的ID，为唯一标识符
        this.x = left; //小球的横坐标
        this.y = top; //小球的纵坐标
        this.g = 9.8; //重力加速度
        this.speedY = 0; //小球的速度
        this.speedX = 0;
        this.isStop = false; //判断当前运动是否应该停止
        this.createBall();
    }

    createBall() {
        let ballDiv = document.createElement('div');
        ballDiv.setAttribute('id', this.ballID);
        $('#bg').append(ballDiv);
        this.ball = $('#' + this.ballID);
        this.ball.addClass('ball').css('left', this.x).css('top', this.y);
    }

    release() {
        let intervalSetting = window.setInterval(() => {
            this.falling();
            if (this.isStop) {
                clearInterval(intervalSetting);
            }
        }, 1);
    }

    falling() {

        // 0.001秒是setInterval的时间间隔，我将其看作是0.001秒内的匀速运动

        if (this.y >= window.innerHeight - 50 && this.speedY > 0) { //触地反弹
            this.rebound('y');
        } else { //自由落体
            this.speedY = this.speedY + this.g * 4000 * 0.001; // 1 m = 3779.527559 px
        }

        if (this.x >= window.innerWidth - 50 || this.x <= 0) {
            this.rebound('x');
        }

        this.y = this.y + this.speedY * 0.001;
        this.x = this.x + this.speedX * 0.001;

        this.ball.css('top', this.y).css('left', this.x);
    }

    rebound(coordinate) {

        if (Math.abs(parseInt(this.speedY)) <= 20 && this.y >= window.innerHeight - 50) { // 当竖直方向速度为零时（这里为了效果写20），且小球位于地面上时
            this.y = window.innerHeight - 50;
            if (Math.abs(parseInt(this.speedX)) <= 10) { // 当水平方向速度也为零
                this.isStop = 1;
            } else { // 当小球在地面上水平滚动
                this.speedX = this.speedX * 0.995; //假设每次损失0.5%的速度
            }
        } else { // 反弹
            if (coordinate === 'y') {
                this.speedY = -this.speedY * 0.9; //假设每次损失10%的速度
            } else {
                this.speedX = -this.speedX * 0.95; //假设每次损失10%的速度
            }
        }
    }

    dragDown() {
        // 将 dragDown 和 dragUp 函数另存一份，解决抬起鼠标后无法移除绑定事件的问题
        this.mouseUp = this.dragUp.bind(this);
        this.mouseMove = this.dragMove.bind(this);

        this.historicX = this.x;
        this.historicY = this.y;

        $(document).on("mousemove", this.ball, this.mouseMove); // 这里必须绑在document上，如果只是绑在小球上，鼠标过快移动会造成小球脱离鼠标轨迹
        $(document).on("mouseup", this.ball, this.mouseUp);
    }

    dragMove(e) {
        this.x = e.clientX - 25;
        this.y = e.clientY - 25;

        if (e.clientX <= 25) {
            this.x = 0;
        } else if (e.clientX >= window.innerWidth - 50) {
            this.x = window.innerWidth - 50;
        }

        if (e.clientY <= 50) {
            this.y = 0;
        } else if (e.clientY >= window.innerHeight - 50) {
            this.y = window.innerHeight - 50;
        }

        this.ball.css('left', this.x);
        this.ball.css('top', this.y);

        this.speedX = (this.x - this.historicX) * 10;
        this.speedY = (this.y - this.historicY);
    }

    dragUp(e) {
        $(document).off('mousemove');
        this.release();
    }
}