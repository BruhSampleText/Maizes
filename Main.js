const container = document.getElementById( "container" )
const world = document.getElementById( "world" )

const deg = Math.PI / 180

let sensitivity = 0.1
let lockedPointer = false

var worldGravity = 10
let groundFriction = 0.1
let worldGroundLevel = 0

let levelRegister = {}
let currentLevelGeo = {}
let currentLevelEntities = {}

let id = 0
let getId = () => { id++; return id }

//	Getting player input!
let keymap = { 
    KeyA : 0, KeyD : 0, KeyW : 0, KeyS : 0, KeyQ : 0, KeyE : 0, ShiftLeft : 0, KeyZ : 0, ControlLeft : 0, Space : 0, KeyV : 0,
    KeyR : 0, KeyI : 0, KeyEscape : 0, KeyY : 0, KeyU : 0,
}

function onKeyPress( event ) {
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = 1
    }
}
function onKeyRelese( event ) {
    if (keymap.KeyV) {
        playerFlags.noclip = !playerFlags.noclip
    }

    if (keymap.KeyI) {
        showWhatsHidden = !showWhatsHidden
    }

    //These if statements are currently used for testing other features
    if (keymap.KeyR) {
        truePoints = 1
    }
    if (keymap.KeyY) {
        startTaskExe = true
    }
    if (keymap.KeyU) {
        nextTask = true
    }

    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = 0
    }
}

 let deltaMouseX = 0, deltaMouseY = 0
function onMouseMove( event ) {
    if ( !lockedPointer ) return

    deltaMouseX = event.movementX * sensitivity
    deltaMouseY = event.movementY * sensitivity
}


document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
document.addEventListener( "mousemove", onMouseMove )

document.addEventListener( "pointerlockchange", () => { lockedPointer = ( document.pointerLockElement === container ) } )

container.onclick = function() {
    container.requestPointerLock()
}

//Messaging  service
let subscriptions = []
let subscribe = ( topic, callback ) => {
    let id = getId()

    subscriptions[ id ] = {
        id: id,
        topic: topic,
        callback: callback,
    }
}
let unsubscribe = ( id ) => {
    
    if ( subscriptions[ id ] ) {
        subscriptions[ id ] = null
    }

}

let publish = ( topic, payload ) => {
    
    for ( let index = 0; index < subscriptions.length; index++ ) {
        let subscriber = subscriptions[ index ]

        if ( !subscriber ) {
            continue
        }

        if ( topic == "all" || subscriber.topic == 'all' || subscriber.topic == topic ) {
            subscriber.callback( payload )
        }

    }

}

subscribe( "all", ( ...any ) => {
    console.log( any )
} )