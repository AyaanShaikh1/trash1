class dustbin {
    constructor(x,y,width,height) {
        var options = {
            isStatic :true
        } 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
    display(){
    var loc = this.body.position;
    push();    
    translate(loc.x,loc.y);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
    }

}
