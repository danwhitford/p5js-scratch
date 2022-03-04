export default class Fib {
    constructor() {
        this.a = 1
        this.b = 1
    }

    next() {
        const tmp = this.a
        this.a = this.b
        this.b += tmp
        return tmp
    }
}