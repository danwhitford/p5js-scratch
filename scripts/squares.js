let c1;
let c2;
let numSquares;
let squareSize;

function setup() {
    createCanvas(501, 501);
    // background(64);
    noLoop();
    // frameRate(1)
    
    numSquares = Math.floor(Math.random() * 32)
    squareSize = 500 / numSquares;
}

function draw() {

    c1 = [random(255),random(255),random(255),random(55,200),]
    c2 = [random(255),random(255),random(255),random(55,200),]

    for (let y = 0; y < numSquares; ++y) {
        for (let x = 0; x < numSquares; ++x) {
            const c = y % 2 === 0 
                ? x % 2 === 0 ? c1 : c2
                : x % 2 === 0 ? c2 : c1

            fill(...c);

            rect(x * squareSize, y * squareSize, squareSize, squareSize);
        }
    }
}
