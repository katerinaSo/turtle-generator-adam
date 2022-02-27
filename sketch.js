let cnv;
let bodyImgs = [];
let headImgs=[]
let bodypick,headpick;
let character = "turlte";
let turtle;
let saveBtn;
let downloadAll
let num
let hash,hashDisplay
function preload() {
  for (let i = 1; i < 5; i++) {
    bodyImgs.push(loadImage("body/body" + i + ".png"));
  }
  for (let i = 1; i < 5; i++) {
    headImgs.push(loadImage("head/head" + i + ".png"));
  }
   
	
}

function setup() {
  cnv = createCanvas(640, 640);
  imageMode(CENTER);
  cnv.parent("#cnv");
  btn = select("#gen");
  hashDisplay=select("#hashCode")
  bodypick = random(bodyImgs);
 
  headpick=random(headImgs)
  turtle = select("#new");
  turtle.mouseClicked(generatePic);
  saveBtn = select("#saveBtn");
  saveBtn.mouseClicked(savePic);
	downloadAll=select("#downBtn")
	downloadAll.mouseClicked(allpossible)
}

function draw() {
  clear();
  imageMode(CENTER) 
  image(bodypick, width/2, height/2);
  image(headpick, width / 2, height/2); 
 
  
}

function generatePic() {
  bodypick = random(bodyImgs);	 
 
  headpick = random(headImgs)	
  hash=str(sha256(character+Date.now()))
  hashDisplay.html(hash)	
}


function savePic() {
  saveCanvas(cnv,hash, "png");
}

function allpossible(){
	
	for(let i=0;i<2;i++){
		for(let j=0;j<2;j++){	
				image(bodyImgs[i],width/2,height/2)
				image(headImgs[j],width/2,height/2)	
				hash=str(sha256(character+Date.now()))
				saveCanvas('turtle'+num+ ".png");
				num+=1		
		}
	}
}