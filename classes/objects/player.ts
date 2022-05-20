import base from "./base";

class player extends base {
    super(name?: string) {
        this.display_name = name
    }

    // properties
    name: string = "Player"
    display_name?: string = "Dummy"
    object: base = undefined

    // methods

    // sets the actual object for the player
    set_humanoid = (humanoid: base, location?: number) => {
        this.object = humanoid
    }
}

export default player