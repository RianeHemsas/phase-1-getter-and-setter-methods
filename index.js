// Add your Circle class here
class Circle{
    
    constructor(radius){
        this.radius=radius;
        // this.pi=Math.PI();
    }
    get diameter(){
        return this.radius*2;
    }
    set diameter(newDiameter){

            this.radius = newDiameter / 2;      
    }
   
    get circumference(){
        return Math.PI*this.diameter;
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (2 * Math.PI);

    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
    set area(newArea)
    {
        this.radius = Math.sqrt(newArea / Math.PI);
    }
}

const circle = new Circle(6);
console.log(circle.radius); 
console.log(circle.diameter); 
console.log(circle.circumference); 
console.log(circle.area); 