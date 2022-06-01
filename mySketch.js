var colors = "ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc".split("-").map(a=>"#"+a)
class Ball{
    constructor(args){ //預設值
        this.r =args.r||random(150)
        this.p =args.p||{x:random(width),y:random(height)}
        this.v = {x:random(-1,1),y:random(-1,1)}
			  this.a = args.a||{}
        this.color = random(colors)
    }
	draw()
	{
	push()
		translate(this.p.x, this.p.y)
		fill(this.color)
    ellipse(0,0, this.r);
		ellipse(-this.r/2,-this.r/2,this.r/2)
		ellipse(this.r/2,-this.r/2,this.r/2)
		fill(255)
		arc(0,0,this.r/2,this.r/2,0,PI)
		fill(0)
		arc(0,0,this.r/3,this.r/3,0,PI)
	pop()
	}
	update(){
		this.p.x += this.v.x
    this.p.y += this.v.y
		this.v.x =this.v.x+this.a.x
		this.v.y =this.v.y+this.a.y
		this.v.x*=0.999
		this.v.y*=0.999
		if(this.p.y>height){
			this.v.y=-abs(this.v.y)
		}
}
}

var ball
var balls = []
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    for(var i=0;i<50;i++){
      ball = new Ball({
				a:{x:0,y:0.5},
				p:{x:width/2,y:height/2}})
        balls.push(ball)
    }
}

function draw() {
    background(100);
    for(let ball of balls){
		ball.draw()
		ball.update()
    }
}