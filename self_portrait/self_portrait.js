function setup() {
  createCanvas(500,500);
  background(255,234,230);
  strokeWeight(12);
  
}


function draw() { 
  //HAIR behind head
 strokeWeight(8);
 stroke(0);
 fill(22,15,2);
 strokeJoin(ROUND);
 beginShape();
 vertex(340,170);
 vertex(340,410);
 vertex(100,410);
 vertex(100,170);
 endShape();
 fill(40,17,0);
 beginShape(); //right-side
 vertex(340,170);
 vertex(340,444);
 vertex(300,444);
 vertex(300,170);
 endShape();
 
  //BACK-COLLAR
 fill(120,185,204);
 strokeWeight(4);
 stroke(61,151,179);
 strokeJoin(ROUND);
 rect(200,365,50,20);
 strokeWeight(0);
 rect(200,367,52,20);
 
   //BODY
 fill(255,231,189);
 stroke(0);
 strokeJoin(ROUND);
 beginShape();
 vertex(146,500);
 vertex(148,400);
 vertex(168,380);
 vertex(280,380);
 vertex(300,400);
 vertex(302,500);
 endShape();
 
  //NECK
 fill(255,231,189);
 stroke(0);
 strokeWeight(8);
 beginShape();
 vertex(210,385);
 vertex(210,350);
 vertex(240,350);
 vertex(240,385);
 endShape();
  
  //HEAD
 stroke(0);
 strokeWeight(12);
 fill(255,231,189);
 ellipse(225,245,210,220);
 
  //CHEEK
 stroke(0);
 strokeWeight(12);
 fill(255,231,189);
 arc(236,262,210,190,radians(0),radians(160));
 
 //MOLE
 fill(28,9,0);
 strokeWeight(0);
 ellipse(180,320,6,6);
 
  //BLUSH
 strokeWeight(0);
 fill(241,190,195);
 ellipse(170,270,35,25);
 ellipse(320,270,33,25);
 
  //LASHES
 stroke(0);
 strokeWeight(6);
 line(310,215,300,225); //right
 line(220,215,210,225); //left
 
  //EYES
 fill(239,239,239); //WHITES
 strokeWeight(0);
 ellipse(200,248,40,47);
 ellipse(290,248,40,47);
 strokeWeight(8); // IRIS
 stroke(0);
 fill(77,39,0);
 arc(200,248,40,47,radians(210),radians(160));
 arc(290,248,40,47,radians(210),radians(160));
 
  //NOSE
 fill(239,205,146);
 arc(255,270,30,25, radians(180),radians(0));
 
  //MOUTH
 strokeWeight(8);
 strokeCap(ROUND);
 //fill(229,43,80); //TONGUE 1
 //arc(250,290,30,40,radians(0),radians(180));
 //line(250,290,250,295);
 // line(230,290,280,290); straight smile
 
 fill(229,43,80); //TONGUE 2
 arc(250,300,30,40,radians(30),radians(190));
 fill(255,231,189);
 arc(255,285,60,35,radians(20),radians(170)); //Curve mouth
 line(250,305,250,308); //tongue line
 
  //HAIR
 fill(40,17,0);
 stroke(0);
 strokeJoin(ROUND);
 beginShape(); //LEFT-SIDE
 arc(150,170,150,100,radians(0),radians(100)); //bangs
 vertex(148,210);
 vertex(148,440);
 vertex(120,444);
 vertex(130,444);
 vertex(99,444);
 vertex(99,190);
 vertex(100,180);
 vertex(110,180);
 vertex(150,130);
 vertex(148,210);
 endShape();
 strokeWeight(0);
 beginShape();
 rect(160,120,100,50);
 endShape();
 
  //CHIN
 //fill(239,205,146);
 //ellipse(252,330,27,16);
 
  //TOP hair
 fill(40,17,0);
 strokeWeight(8);
 arc(124,430,49,28,radians(0),radians(100));
 arc(169,185,140,125,radians(180),radians(270));
 arc(240,170,200,140,radians(210),radians(0));
 fill(255,231,189);
 strokeWeight(12);
 arc(265,188,95,60,radians(200),radians(350)); //bangs

  //BROWS
 fill(0);
 strokeWeight(8);
 beginShape(); //right
 vertex(270,200);
 vertex(300,196);
 vertex(310,200);
 endShape();
 beginShape(); //left
 vertex(220,200);
 vertex(180,196);
 vertex(166,200);
 endShape();
 
  //EAR
 fill(255,231,189);
 strokeWeight(8);
 arc(130,270,45,50,radians(70),radians(260));
  
  //SHIRT
 fill(255);
 stroke(191,188,186);
 strokeWeight(4);
 rect(160,420,135,60);
 
 //PANTS
 fill(0);
 stroke(60);
 strokeWeight(4);
 rect(160,490,135,60);
 strokeWeight(1);
 line(220,490,220,495);
 fill(80);
 ellipse(230,495,6,6); //button
 
  //JACKET
 fill(120,185,204);
 strokeWeight(6);
 stroke(61,151,179);
 strokeJoin(ROUND);
 
 beginShape(); //left-side sleeve
 vertex(142,500);
 vertex(146,400);
 vertex(170,380);
 vertex(200,380);
 vertex(202,500);
 endShape();
 
 beginShape(); //right-side sleeve
 vertex(250,500);
 vertex(252,380);
 vertex(282,380);
 vertex(302,400);
 vertex(304,500);
 endShape();
 
 //JACKET DETAILS
 strokeWeight(4);
 line(172,410,172,500);
 line(282,410,282,500);
 beginShape(); // left-collar
 vertex(200,365);
 vertex(175,380);
 vertex(190,400);
 vertex(205,390);
 vertex(200,374);
 endShape();
 beginShape(); // right-collar
 vertex(250,365);
 vertex(270,375);
 vertex(270,395);
 vertex(255,390);
 vertex(250,380);
 endShape();
 fill(247,253,255); //buttons
 strokeWeight(2);
 stroke(191,188,186);
 ellipse(260,410,6,6);
 ellipse(260,430,6,6);
 ellipse(260,450,6,6);
 ellipse(260,470,6,6);
 ellipse(260,490,6,6);
 fill(250,97,138);
 stroke(224,88,124);

}
