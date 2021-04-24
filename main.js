function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(550,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Posenet initiated");
}
function draw()
{
    background("#0ff5ed");
}
function gotPoses(results)
{
if(results.lenght>0)
{
    console.log(results);
}
}
