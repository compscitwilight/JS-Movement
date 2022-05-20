class vector2 {
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    // properties
    x: number
    y: number

    // methods
    round = () => {
        Math.round(this.x)
        Math.round(this.y)
    }
}

export default vector2