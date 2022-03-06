import SimpleTurtle from './turtle.js'
import Fib from './fib.js'
import 'p5'
import 'chroma'

let t
let colour_scale
let c_index = 0
const f = new Fib()

window.setup = function () {
    createCanvas(1080, 1080);
    t = new SimpleTurtle(window)
    noStroke()
    colour_scale = chroma.scale([chroma.random(), chroma.random()])
        .colors(6)
}

window.draw = function () {
    const n = f.next()
    
    const c = colour_scale[c_index]
    ++c_index
    c_index %= 6

    fill(color(c))
    t.square(n)
    t.repos(n)
}
