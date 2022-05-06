function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)

}
function draw() {
  let w = windowWidth/2
  let h = windowHeight/2
  background(0)
  translate(w,h)
  rotate(-90)
  let hr = hour()
  let min = minute()
  let sc = second()
  // fill(255)
  // noStroke()
  // text(2 + ":" + min + ":"+ sc ,20,500)
strokeWeight(8)
stroke(255)
noFill()
let secAngle = map(sc,0,60,0,360)


let minAngle = map(min,0,60,0,360)


let hrAngle = map(hr%12,0,12,0,360)


push()
rotate(secAngle)
stroke(255, 255, 0)

line(0,0,100,0)
pop()

push()
rotate(minAngle)
stroke(244, 17, 17)

line(0,0,100,0)
pop()

push()
rotate(hrAngle)
stroke(255)
line(0,0,100,0)
pop()
}
