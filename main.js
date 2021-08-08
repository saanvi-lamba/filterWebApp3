noseX=0;
noseY=0;

function preload() {
    star_nose = loadImage('https://i.postimg.cc/7ZxGJzNF/star-nose.png');
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 700, 500);
    image(star_nose, noseX, noseY, 50, 50);
}

function take_snapshot() {
    save('FilterWebAppImage.png');
}









