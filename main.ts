// Create Sprite
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e e e e e e e e e . . . 
    . e e d d e e e e d d e e . . . 
    . e d d e e e e e e d d e . . . 
    . e e e e e e e e e e e e . . . 
    . . e e f e e e e f e e . . . . 
    . . f e e e 4 4 e e e f . . f f 
    . . f d e e f f e e 6 f . f e f 
    . . . f 6 6 6 6 6 6 d d f e e f 
    . . . f d e e e e e e d d e f . 
    . . . f e e e e e d e e f f . . 
    . . . f e f f f e f f e f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
let bone = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 1 1 . . . . . . . 1 1 . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 . . . . . . . 1 1 . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let stick = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e f e e e e e e . 
    . . . . . . . e e e e e e f e . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let tennisball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . 1 1 7 7 1 1 . . . . . . 
    . . . 7 7 1 7 7 1 7 7 . . . . . 
    . . . 7 7 1 7 7 1 7 7 . . . . . 
    . . . 7 7 1 7 7 1 7 7 . . . . . 
    . . . 7 1 1 7 7 1 1 7 . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let chewytoy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let frisbee = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 4 f 4 4 4 f 4 . . . . 
    . . . . . f 4 f 4 f 4 f . . . . 
    . . . . 4 4 f 4 f 4 f 4 4 . . . 
    . . . . 4 4 4 f 4 f 4 4 4 . . . 
    . . . . 4 4 f 4 f 4 f 4 4 . . . 
    . . . . 4 f 4 f 4 f 4 f 4 . . . 
    . . . . . 4 f 4 4 4 f 4 . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let otherdog1 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . .
    . 4 f f f f . . f f f f 4 . . .
    4 f f e f f f f f f e f f e . .
    4 f f f e f f f f e f f f e . .
    f f f f f e f f e f f f f f . .
    . f f f e f f f f e f f f . . .
    . . f f f f f f f f f f . . . .
    . . f f f f e e f f f f . . f f
    . . f e f f f f f f 6 f . f e f
    . . . f 6 6 6 6 6 6 e e f e e f
    . . . f e f f f f f f e e e f .
    . . . f f f f f f e f f f f . .
    . . . f f f f f f f f f f . . .
    . . . f f . . f f . . f f . . .
`, SpriteKind.Enemy)
// Overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.startEffect(effects.trail, 1000)
    sprite.say("OWIE!:(", 1000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 1000)
    sprite.say("A TOY!", 1000)
})

// Controller
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
// Background
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(player1, sprites.castle.tilePath5)
tiles.placeOnRandomTile(bone, sprites.castle.tilePath8)
tiles.placeOnRandomTile(stick, sprites.castle.tilePath4)
tiles.placeOnRandomTile(tennisball, sprites.castle.tilePath9)
tiles.placeOnRandomTile(chewytoy, sprites.castle.tilePath2)
tiles.placeOnRandomTile(frisbee, sprites.castle.tilePath5)
tiles.placeOnRandomTile(otherdog1, sprites.castle.tilePath5)