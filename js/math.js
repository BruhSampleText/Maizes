
function vec3( x = 0, y = 0, z = 0 ) {
    return { x : x, y : y, z : z }
}
function vec2( x = 0, y = 0 ) {
    return { x : x, y : y }
}

function addVec3( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x + vec2.x,
        y : vec1.y + vec2.y,
        z : vec1.z + vec2.z,
    }
}

function scaleFVec3 ( vec1 = { x : 0, y : 0, z : 0 }, f = 1 ) {
    return {
        x : vec1.x * f,
        y : vec1.y * f,
        z : vec1.z * f,
    }
}
function multVec3 ( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x * vec2.x,
        y : vec1.y * vec2.y,
        z : vec1.z * vec2.z,
    }
}

function getVec3Magnitude( vec1 = { x : 0, y : 0, z : 0 } ) {
    return Math.sqrt( vec1.x ** 2 + vec1.y ** 2 + vec1.z ** 2 )
}

function rotVec3Y( vec1 = { x : 0, y : 0, z : 0 }, rad = 0 ) {
    return {
        x : vec1.z * Math.sin( rad ) + vec1.x * Math.cos( rad ),
        y : vec1.y,
        z : vec1.z * Math.sin( rad ) - vec1.x * Math.sin( rad )
    }
}

function fixRotationVector( vec = { x : 0, y : 0, z : 0 } ) {
    if ( vec.x > 360 ) { vec.x -= 360 }
    if ( vec.x < -360 ) { vec.x += 360 }

    if ( vec.y > 360 ) { vec.y -= 360 }
    if ( vec.y < -360 ) { vec.y += 360 }

    if ( vec.z > 360 ) { vec.z -= 360 }
    if ( vec.z < -360 ) { vec.z += 360 }
}

function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

function clamp( min, max, val ) {
	if ( min > val ) {
		return min
	} else if ( max < val ) {
		return max
	} else return val
}

/*

let
clamp = (v, min, max) => v < min ? min : (v > max ? max : v),
scale = (v, in_min, in_max, out_min, out_max) => out_min + ((out_max) - out_min) * (((v) - in_min) / ((in_max) - in_min)),
anglemod = (r) => Math.atan2(Math.sin(r), Math.cos(r)),
vec3 = (x = 0, y = 0, z = 0) => ({x, y, z}),
vec3_rotate_yaw_pitch = (p, yaw, pitch) => vec3_rotate_y(vec3_rotate_x(p, pitch), yaw),
vec3_rotate_y = (p, rad) => vec3(p.z * Math.sin(rad) + p.x * Math.cos(rad), p.y, p.z * Math.cos(rad) - p.x * Math.sin(rad)),
vec3_rotate_x = (p, rad) => vec3(p.x, p.y * Math.cos(rad) - p.z * Math.sin(rad), p.y * Math.sin(rad) + p.z * Math.cos(rad)),
vec3_2d_angle = (a, b) => Math.atan2(b.x - a.x, b.z - a.z),
vec3_clone = (a) => vec3(a.x,a.y,a.z),
vec3_length = (a) => Math.hypot(a.x,a.y,a.z),
vec3_dist = (a, b) => vec3_length(vec3_sub(a, b)),
vec3_dot = (a, b) => (a.x * b.x + a.y * b.y + a.z * b.z),
vec3_add = (a, b) => vec3(a.x + b.x, a.y + b.y, a.z + b.z),
vec3_sub = (a, b) => vec3(a.x - b.x, a.y - b.y, a.z - b.z),
vec3_mul = (a, b) => vec3(a.x * b.x, a.y * b.y, a.z * b.z),
vec3_mulf = (a, b) => vec3(a.x * b, a.y * b, a.z * b),
vec3_cross = (a, b) => vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x),
vec3_normalize = (v) => vec3_mulf(v, 1/vec3_length(v)),
vec3_face_normal = (v0, v1, v2) => vec3_normalize(vec3_cross(vec3_sub(v0, v1), vec3_sub(v2, v1)));*/