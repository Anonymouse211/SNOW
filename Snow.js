class Snow{
constructor(x,y){

       var options={
           friction: 1,
           density: 3,
           restitution: 1
        }
            this.x = x
            this.y = y
            this.image = loadImage("snow4.webp")
            this.body = Bodies.rectangle(x, y, 30, 30, options)
            World.add(world, this.body)
        }
    
            display (){
            image(this.image, this.body.position.x, this.body.position.y,30,30)
    
    
            }
    
        }