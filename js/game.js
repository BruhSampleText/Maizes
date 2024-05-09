let last = performance.now()
let gameLoop = false

function game() {
    let current = performance.now()
    let dt = (current - last) / 1e3
    last = current

    if (dt > 2) {
        dt = 1
    }

    if ( keymap.KeyEscape ) {
        publish( "stop game" )
        return
    }

    updatePlayer( dt )
    updateWindows( dt )
    request = requestAnimationFrame( game )
}

subscribe( "startgame", () => {

    loadLevel( "peat" )

    publish( "spawn player", vec3( 0, 0, 0 ) )

    game()
} )

window.onload = () => {
    publish( "startgame" )
}