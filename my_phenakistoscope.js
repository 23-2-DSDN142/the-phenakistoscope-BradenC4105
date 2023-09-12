const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("FrogJump" , "PNG", 5 )

}

function setup_layers(pScope){

  new PLayer(null, 56, 186, 209);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(FrogJump);
  layer1.mode( RING );
  layer1.set_boundary( 400, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(lilypad)
  layer3.mode( RING )
  layer3.set_boundary( 450, 950)
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

function lilypad(x, y, animation, pScope){
  fill(23, 166, 61)
  rect(50-animation.frame*200,500,100,10)
}
