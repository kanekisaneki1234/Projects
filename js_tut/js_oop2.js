class Square {
    constructor(side) {
        this.side = side
        this.numOfGetRequests=0
    }
    get area() {
        this.numOfGetRequests++
        return this.side*this.side
    }
    set area (area) {
        this.side = Math.sqrt(area);
    }
}

let square1 = new Square(5)
square1.area = 25

console.log(square1.area,'\n',square1.side,'\n',square1.numOfGetRequests)