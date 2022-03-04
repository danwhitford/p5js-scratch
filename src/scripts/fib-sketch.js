import SimpleTurtle from './turtle.js'
import Fib from './fib.js'
import 'p5'
import 'chroma'

let t
const f = new Fib()

window.setup = function () {
    createCanvas(800, 800);
    background(220);
    // noLoop()
    t = new SimpleTurtle(window)
    noStroke()
}

window.draw = function () {
    const n = f.next() * 20
    const r = chroma.random().hex()
    const c = color(r)
    fill(c)
    t.square(n)
    t.repos(n)
}
