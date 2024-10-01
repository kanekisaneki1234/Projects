class Square {
    constructor(side) {
        this.side=side
    }

    get area() {
        return this.side*this.side
    }

    static checkEqual(a,b) {
        return a.side===b.side
    }
}

let square1 = new Square(5)
let square2 = new Square(5)
console.log(Square.checkEqual(square1, square2))