class Rectangle {
    constructor (length, breadth, color) {
        // console.log('The Rectangle is being created!')
        this.length = length
        this.breadth = breadth
        this.color = color
    }
    getArea() {
        return this.length*this.breadth
    }
    getDescription() {
        return `My dimensions are ${this.length}x${this.breadth} and my color is ${this.color}.`
    }
}

const demo = new Rectangle(5,10,'blue')

// console.log(demo)

console.log(demo.getDescription())