function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)';
}

var translateX = 300;
var translateY = 200;

var $ball = document.querySelector('.ball');
$ball.style.transform = translate(translateX, translateY);

var timer = setInterval(() => {
    $ball.style.transform = translate(translateX, translateY);

    var randomX = Math.floor(Math.random() * 100) - 50;
    var randomY = Math.floor(Math.random() * 100) - 50;

    translateX += randomX;
    translateY += randomY;

    if (translateY > 800 || translateY > 800) {
        clearInterval(timer);
    }
}, 1000);

function Canvas() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
}

Canvas.prototype.drawGrid = function(color, stepx, stepy) {
    var ctx = this.context;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;

    for (var i = stepx + 0.5; i < ctx.canvas.width; i += stepx) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ctx.canvas.height);
        ctx.stroke();
        ctx.closePath();
    }

    for (var i = stepy + 0.5; i < ctx.canvas.height; i += stepy) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(ctx.canvas.width, i);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
};

var canvas = new Canvas();
canvas.drawGrid('lightgrey', 50, 50);

var result = ['CANCEL', 'RELOAD', 'CONFIRM'];
