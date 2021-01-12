/**
 * Background
 */
// Create Sprites
let player1 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 e e e e . . e e e e 4 . . . 
    4 e e e e e e e e e e e e 4 . . 
    4 e e 4 4 e e e e 4 4 e e 4 . . 
    e e 4 4 e e e e e e 4 4 e e . . 
    . e e e e e e e e e e e e . . . 
    . . e e f e e e e f e e . . . . 
    . . f e e e 4 4 e e e f . . f f 
    . . f 4 e e f f e e 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 e e e e e e 4 4 5 f . 
    . . . f e e e e e 4 e e f f . . 
    . . . f e f f f e f f e f . . . 
    . . . f f . . f f . . f f . . . 
    `, 0)
let bone = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 . . . . . . 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 . . . . . . 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
let stick = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e f e e e . . . 
    . . . e f f e e e e e f e . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
let tennisball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 1 1 7 7 1 1 7 7 . . . 
    . . . 7 7 7 1 7 7 1 7 7 7 . . . 
    . . . 7 7 7 1 7 7 1 7 7 7 . . . 
    . . . 7 7 7 1 7 7 1 7 7 7 . . . 
    . . . 7 7 7 1 7 7 1 7 7 7 . . . 
    . . . . 7 1 1 7 7 1 1 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
let chewytoy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    `, 0)
tiles.placeOnRandomTile(bone, sprites.castle.tilePath5)
tiles.placeOnRandomTile(stick, sprites.castle.tilePath5)
tiles.placeOnRandomTile(tennisball, sprites.castle.tilePath5)
tiles.placeOnRandomTile(chewytoy, sprites.castle.tilePath5)
// Controller
controller.moveSprite(player1)
tiles.setTilemap(tilemap`level_1`)
