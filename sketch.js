let dvd_size = 160;
let dvd_w = dvd_size;
let dvd_h = dvd_size*(650/1100); 
let buf = 0;  

let pos_x = dvd_w + buf;
let pos_y = dvd_h + buf;

let vel_x,vel_y;

let r,g,b;

let speed = 3;

let img;

// Load the image.
function preload() {
  img = loadImage('assets/DVD_video_logo.png');
}

function setup() {
  createCanvas(windowWidth+1, windowHeight);
  
  vel_x = speed/sqrt(2);
  vel_y = speed/sqrt(2);
  
  let brightness = 90
  r = random(brightness,255);
  g = random(brightness,255);
  b = random(brightness,255);

    recolor(img);
}  

function recolor(img) {
    img.loadPixels();

    let new_r = random(0,255); 
    let new_g = random(0,255);
    let new_b = random(0,255);
    for (let i = 0; i < img.pixels.length; i += 4) {  
        img.pixels[i] = new_r;   // New R
        img.pixels[i + 1] = new_g; // New G
        img.pixels[i + 2] = new_b; // New B
    }
  
    img.updatePixels();
}
  
function draw() {
  let w = windowWidth+1;
  let h = windowHeight;

  background(0);
  
  fill(r, g, b);
  image(img,pos_x, pos_y, dvd_w, dvd_h);
  
  pos_x += vel_x;
  pos_y += vel_y;
  
  collision = false;
  
  if (pos_x + dvd_w >= w && vel_x > 0) {
    vel_x *= -1;
    collision = true;
  }
  if (pos_y + dvd_h>= h && vel_y > 0) {
    vel_y *= -1;
    collision = true;
  }
  if (pos_x <= 0 && vel_x < 0) {
    vel_x *= -1;
    collision = true;
  }
  if (pos_y <= 0 && vel_y < 0) {
    vel_y *= -1;
    collision = true;
  }
  if (collision) {
    recolor(img);
  }
  
}