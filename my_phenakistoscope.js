const SLICE_COUNT =10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("FrogJump" , "PNG", 5 )
  pScope.load_image("Frog_Face" , "PNG");
}

function setup_layers(pScope){

  new PLayer(null, 56, 186, 209);  //lets us draw the whole circle background, ignoring the boundaries
 
  var layer3 = new PLayer(Flowers)
  layer3.mode( SWIRL(2) )
  layer3.set_boundary( 450, 950)

   var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  

  var layer1 = new PLayer(FrogJump);
  layer1.mode( RING );
  layer1.set_boundary( 400, 1000 );

  var layer1 = new PLayer(FrogFace);
  layer1.mode( RING );
  layer1.set_boundary( 0, 400 );
}

function FrogJump(x, y, animation, pScope){
  scale(0.35)
  pScope.draw_image_from_sequence("FrogJump", 0, -2400, animation.frame);
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(17, 64, 30)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background



}

function Flowers(x, y, animation, pScope){
  angleMode(DEGREES)
  noStroke()
  fill(245, 149, 205)
ellipse(0, 10, 20, 100)
rotate(45)
ellipse(0, 10, 20, 100)
rotate(45)
ellipse(0, 10, 20, 100)
rotate(45)
ellipse(0, 10, 20, 100)
rotate(45)
ellipse(0, 10, 20, 100)
}
function FrogFace(x, y, animation, pScope){
  scale(0.1)
  pScope.draw_image("Frog_Face",0,-3000-animation.wave(2)*100);
}