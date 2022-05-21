img = "";
function preLoad()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#18c7de");
    text("dog", 50, 50);
    noFill();
    stroke("#0d0d0d");
    rect(30, 60, 450, 350);
}