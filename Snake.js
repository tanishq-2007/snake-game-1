class Snake{
    constructor(){
        this.body=[];
        this.body[0]=createVector(0,0);
        this.xdir=0;
        this.ydir=0;
        
    }
    update(){
        this.body[0].x+=this.xdir
        this.body[0].y+=this.ydir
    }
    show(){
        for(var i=0;i<this.body.length;i++){
        rect(this.body[i].x,this.body[i].y,10,10) 
        }
     }
    setDir(x,y){
        this.xdir=x;
        this.ydir=y;

    }

    eat(pos){
        var x=this.body[0].x;
        var y=this.body[0].y;
        console.log(x+" "+pos.x)
        //if(x===pos && y===pos){
        if((x>=pos.x-5 && x<=pos.x+5)&&(y==pos.y)|| (y>=pos.y-5 && y<=pos.y+5)&&(x==pos.x)){
            console.log("eatingFood");
            return true;
        }
        

        return false;
    }
    grow(){
     var head=this.body[this.body.length-1].copy();
     this.body.push(head);   

    }
}





