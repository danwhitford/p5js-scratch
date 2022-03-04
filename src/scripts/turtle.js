
export default class SimpleTurtle {
    constructor(p5) {
        this.x = p5.width / 2
        this.y = p5.height / 2
        this.heading = 'lt'
        this.p5 = p5
    }

    up(l) {
        const newY = this.y - l
        this.p5.line(this.x, this.y, this.x, newY)
        this.y = newY
    }

    square(l) {
        if (this.heading === 'up') {
            this.p5.square(this.x - l, this.y - l, l)
        } else if (this.heading === 'lt') {
            this.p5.square(this.x - l, this.y, l)
        } else if (this.heading === 'rt') {
            this.p5.square(this.x, this.y - l, l)
        } else if (this.heading === 'dn') {
            this.p5.square(this.x, this.y, l)
        }
    }

    repos(l) {
        if (this.heading === 'up') {
            this.heading = 'lt'
            this.x -= l
            this.y -= l
        } else if (this.heading === 'lt') {
            this.heading = 'dn'
            this.x -= l
            this.y += l
        } else if (this.heading === 'rt') {
            this.heading = 'up'
            this.x += l
            this.y -= l
        } else if (this.heading === 'dn') {
            this.heading = 'rt'
            this.x += l
            this.y += l
        }
    }
}
