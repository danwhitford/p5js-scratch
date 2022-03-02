let c1;
let c2;
let numSquares;
let squareSize;
let counter = 0;

function setup() {
    createCanvas(501, 501);
    // background(64);
    // noLoop();
    // frameRate(1)
}

function draw() {
    for (let n = 0; n < 2; ++n) {
        c1 = [random(255), random(255), random(255), random(55, 200),]
        c2 = [random(255), random(255), random(255), random(55, 200),]
        numSquares = n === 0 ? Math.floor(Math.random() * 32) : Math.floor(Math.random() * 8)
        squareSize = 500 / numSquares;

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
    saveFrames('frames')
    noLoop()
    // if (counter > 10) {
    //     noLoop()
    // }
    // saveCanvas('canvas'+counter, 'png')
    // counter++
}

