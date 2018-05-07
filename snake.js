
//思考：蛇对象的属性和方法:  蛇是由一个一个的小盒子组成的。
//属性：
  //width: 宽  保持和食物一样大
  //height: 高
  //headColor: 蛇头的颜色
  //bodyColor: 蛇身体的颜色
  //body:  记录了蛇所有的格子的位置

//方法：
  //render: 把蛇渲染到地图
  //move:   移动
function Snake(options) {
  options = options || {};
  this.width = options.width || 20;//蛇的格子的宽度
  this.height = options.height || 20;
  this.headColor = options.headColor || "green";
  this.bodyColor = options.bodyColor || "red";

  //蛇还需要一个属性，用来记录蛇的身体的所有的格子的位置。
  //是一个数组，记录了蛇所有格子的位置
  this.body = [
    {x:2, y:0},
    {x:1, y:0},
    {x:0, y:0}
  ]
}

Snake.prototype.render = function (target) {
  //思路：根据this.body，把每一个盒子都渲染出来
  for(var i = 0; i < this.body.length; i++) {
    var span = document.createElement("span");
    //给span设置width 高度 颜色 left top
    span.style.width = this.width + "px";
    span.style.height = this.height + "px";
    span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;
    span.style.position = "absolute";
    span.style.left = this.body[i].x * this.width + "px";
    span.style.top = this.body[i].y * this.height + "px";
    target.appendChild(span);
  }
}

var s = new Snake();
console.log(s);
s.render(map);