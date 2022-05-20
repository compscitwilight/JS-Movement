const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const movementIncrement = 10

const playerWidth = {
    x: 100,
    y: 100
}
let position = {
    x: 0,
    y: 0
}

ctx.fillRect(position.x, position.y, playerWidth.x, playerWidth.y)

const UpdateCoordinates = () => {
    const coordinatesP = document.querySelector("#coordinates")
    coordinatesP.innerHTML = `(${position.x}, ${position.y})`
}

const UpdateCanvasSize = () => {
    canvas.height = window.innerHeight / 1.1
    canvas.width = window.innerWidth / 1.5
}

const RenderPlayer = (x, y) => {
    ctx.clearRect(position.x, position.y, playerWidth.x, playerWidth.y)
    ctx.fillRect(x, y, playerWidth.x, playerWidth.y)

    position.x = x
    position.y = y

    UpdateCoordinates()
}

window.addEventListener("load", (event) => {
    UpdateCanvasSize()
    RenderPlayer(position.x, position.y)
    UpdateCoordinates()

    console.log("loaded canvas")
})

window.addEventListener("keydown", (event) => {
    const key = event.key
    let newPosition = {
        x: position.x,
        y: position.y
    }

    switch (key) {
        case ("w"):
            newPosition.y -= movementIncrement
            RenderPlayer(newPosition.x, newPosition.y)
            break
        case ("a"):
            newPosition.x -= movementIncrement
            RenderPlayer(newPosition.x, newPosition.y)
            break
        case ("s"):
            newPosition.y += movementIncrement
            RenderPlayer(newPosition.x, newPosition.y)
            break
        case ("d"):
            newPosition.x += movementIncrement
            RenderPlayer(newPosition.x, newPosition.y)
            break
    }

    console.log(position)
})

window.addEventListener("resize", (event) => UpdateCanvasSize)