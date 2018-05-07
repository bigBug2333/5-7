function Food(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.bgColor = options.bgColor || "blue";
    this.x = options.x || 0;
    this.y = options.y || 0;
}
// 改属性：var f = new Food({
//     bgColor : "green";
// });


Food.prototype.render = function (target) {
    //1. 先创建一个div
    var div = document.createElement("div")
    //2. 设置div的宽度、高度、背景颜色、位置
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.bgColor;

    //设置位置，随机x和y
    //设置div的left和top
    var m = target.offsetWidth/this.width;
    var n = target.offsetHeight/this.height;
    this.x = parseInt(Math.random() * m);
    this.y = parseInt(Math.random() * n);
    
    div.style.position = "absolute";
    div.style.left = this.x * this.width + "px";
    div.style.top = this.y * this.height + "px";

    //3. 把食物添加到target中
    target.appendChild(div);
}