var colorList = ['AF0404', '#930404', '#0B610B', '#D7DF01'];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
   push()
    var volume = mic.getLevel();

  var newMax = 1;
  volume = map(volume, 0, 1, 0, newMax);

  background(239,251,248);
  
 
  var size = map(volume, 0.5, 1, width / 5, width / 2);
  
    for (var x = 0; x <= windowWidth; x += 100) {
    for (var y = 0; y <= windowHeight; y += 100) {
      noStroke()
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      ellipse(x - size, y - size, 10, 10);
      ellipse(x + size, y + size, 20, 20);
  pop()    
  
    }
    
  }
  
  push()
  fill(151,1,1)
  var volume = mic.getLevel();
  var newMax = 0.3;
  volume = map(volume, 0, 1, 0, newMax);
    var size = map(volume, 0, 1, width / 8, width / 3);
  textSize(size)
  textAlign(CENTER)
  textFont('lobster')
  text('MERRY',width/2,height/2)
  text('CHRISTMAS!',width/2,height/2+200)
 
pop()

push()
  fill(243,191,3)
  var volume = mic.getLevel();
  var newMax = 0.2;
  volume = map(volume, 0, 1, 0, newMax);
    var size = map(volume, 0, 1, width / 8, width / 3);
  textSize(size)
  textAlign(CENTER)
  textFont('lobster')
  text('MERRY',width/2,height/2)
  text('CHRISTMAS!',width/2,height/2+200)
 
pop()
}