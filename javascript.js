/////宣告變數
let w, h;///畫面長寬
let img;///目標物圖示
let img1;
let img2;
let img3;
let size;
let button;///掃描QR Code
let place;
let timer;///計時器
let score;///計分板
let r;

function preload() {
    img = loadImage('assets/0.jpg');
    img1 = loadImage('assets/1.jpg');
    img2 = loadImage('assets/2.jpg');
    img3 = loadImage('assets/3.jpg');
   
    place =  ['Mango', 'Apple', 'Papaya']; 
    
}

function setup() {
    ///賦值
    w = windowWidth;
    h = windowHeight;
    ///計時, 計分板預設值
    timer = 30;
    score = 0;
    ///調整size大小
    size = sqrt(w*h)/4;
    //print(size);
    ///創建視窗
    createCanvas(w,h-480);
}

function draw() {
    ///每60幀, timer-1
    if(timer>0){
        if (frameCount%60==0) {
            timer-=1;
            //print(place[i%3]);
        }
    }
    background(220);
    ///文字大小
    textSize(size/4);
    ///文字靠右
    textAlign(RIGHT);
    ///計時器
    text('計時:', 80, size/3);//text(text, position, size);
    text(timer, 140, size/3);
    text('s', 160, size/3);
    ///計分板
    text('計分:', 260, size/3);
    text(score, 320, size/3);
    text('分', 360, size/3);
    ///目標物圖示
    //image(img, w-size*1.5, h-size*1.5, size*1.5,size*1.5);
    image(img, w-size*1.75, h-size*4.75, size*1.5,size*1.5);
    if(r==0){
        image(img1, w-size*1.75, h-size*4.75, size*1.5,size*1.5);
    }else if(r==1){
        image(img2, w-size*1.75, h-size*4.75, size*1.5,size*1.5);
    }else if(r==2){
        image(img3, w-size*1.75, h-size*4.75, size*1.5,size*1.5);
    }
    ///創建按鈕切換模式
    button = createButton('掃描場景');
    button.position(w-size*2.75, h-size/1.5);
    button.size(size,size*0.5);
    button.mousePressed(changeBG);

    ///創建按鈕隨機出題
    button1 = createButton('Game Start');
    button1.position(w-size*2.75, h-size/0.75);
    button1.size(size,size*0.5);
    button1.mousePressed(changeBG1);
}
/////按下click me
function changeBG() {
    window.location.href="camera.html";
}

function changeBG1() {
    r = parseInt(Math.random()*(3));
    print(r);
    timer = 30;
}