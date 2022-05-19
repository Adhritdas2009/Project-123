function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(800, 250);
}

function draw(){
    image(canvas, 0, 0, canvas.width, canvas.height)
}