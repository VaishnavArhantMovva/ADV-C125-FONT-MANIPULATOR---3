function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(900,200);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.position(200,200);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }
    else{

    
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    leftX = results[0].pose.leftWrist.x;
    rightX = results[0].pose.rightWrist.x;
    difference = floor(leftX-rightX);
    console.log("noseX ="+noseX+",noseY ="+noseY+",leftX ="+leftX+",rightX ="+rightX+",difference ="+difference);
}}

function draw()
{
    textSize(difference);
    stroke("black")
    fill("black");
    text("Vaishnav",50,400);
    document.getElementById("square").innerHTML = "Font size of the text will be ="+difference+"px";
}


