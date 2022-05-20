import vector2 from "../types/vector2"

class base {
    // properties
    name: string = "base"
    position?: vector2 = new vector2(0, 0)
    private disposed: boolean = false

    // methods
    dispose = () => {
        this.disposed = true
    }
}

export default base