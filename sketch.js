var ball;
var hypnoticball, database, position;
var hypnoticballPosition;


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "blue";
    hypnoticballPosition = database.ref('ball/position');
    hypnoticballPosition.on("value", readPosition, showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
     //   changePosition(-1,0);
     writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      //  changePosition(1,0);
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       // changePosition(0,-1);
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
       // changePosition(0,+1);
       writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data) {
    position = data.val();
    console.log(position.x);
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;

}


function showError(){
console.log("error in writing DB");

}

function writePosition(x,y){
database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y
});
}