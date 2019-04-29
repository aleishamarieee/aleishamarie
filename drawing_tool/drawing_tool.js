
var img;
var initials ='al'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
 img = loadImage('lemon.png');  // knife.jpg needs to be next to this .js file
 img2 = loadImage('leaves.png');
 img3 = loadImage('banana.png');
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/cat2-sm.jpg');
}

function setup() { 
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // PENCIL
   
    strokeWeight(2);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY); 
  } else if (toolChoice == '2') { // BRUSH

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    //ellipse(mouseX,mouseY,10,10);
  } else if (toolChoice == '3') { // PINK color

    stroke(255, 168, 200);
    fill(255, 168, 200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // YELLOW color

    stroke(255, 249, 194);
    fill(255, 249, 194);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '5') { // BLUE color

    stroke(114, 190, 204);
    fill(114, 190, 204);
    line(mouseX, mouseY, pmouseX, pmouseY);82
  } else if (key == '6') { // GREY color

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') { // SM 1132Square

    rect(mouseX, mouseY, 5, 5);
  } else if (toolChoice == '8') { // LRG Square

    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '9') { // Blue Hue

    background(114, 187, 204, 100);
  } else if (toolChoice == '0') { // Party time!
    
    background(random(255), random(255), random(255), 100);
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // Lemon Stamp
    image(img, mouseX, mouseY);
    
    
  } else if (toolChoice == 'w' || toolChoice == 'W') { // Leaf Stamp
    image(img2, mouseX-100, mouseY);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // Banana Stamp
    image(img3, mouseX-50, mouseY);
  
  } else if (toolChoice == 'r' || toolChoice == 'R') { // Circles
    background(255,168,206,95);
    for (var y = -20;   y <=  height;  y +=  8) {     
    for (var x = 0;   x <=  width   ;  x +=  12) {
    fill (255, 249, 194, 95);
    strokeWeight(0);
    ellipse(x+1,  y*1.5, 16-y/20, 16-y/20);
  }
  }
  
  }
 }
 
function testbox() {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(200, 20, 20);
  rect(30+x, 120+y, 100, 100);
  fill(20, 20, 200);
  rect(x-34, y-56, 100, 100);
  fill(20, 20, 20);
  rect(x,y,x+34, y+20);
}

function self_portrait(){
// this function draws a self portrait when called
// you will need to call this, perhaps as one of your keypress functions
  
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
