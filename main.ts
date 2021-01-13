sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 1000)
    sprite.say("A TOY!", 1000)
})
// Overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.startEffect(effects.trail, 1000)
    sprite.say("OWIE!:(", 1000)
    game.over(false)
})
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
    . c c c c . . . . . c c c c . . 
    . c 1 1 c c c c c c c 1 1 c . . 
    . c 1 1 1 1 1 1 1 1 1 1 1 c . . 
    . c 1 1 1 1 1 1 1 1 1 1 1 c . . 
    . c 1 1 c c c c c c c 1 1 c . . 
    . c c c c . . . . . c c c c . . 
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
let rope = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b b b f . . . . . . 
    . . . . . . f b b b . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let shoes = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f . . . . . . . . . 
    . . . e e e e . . . . . . . . . 
    . . . e e e e f e f . . . . . . 
    . . . e e e e f e f e . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let stick2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . f e . . . . . . . . . . . 
    . . . f e . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . e f . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
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
let otherdog2 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 e e e e . . e e e e 4 . . . 
    4 e e e e e e e e e e e e 4 . . 
    4 e e e 4 e e e e 4 e e e 4 . . 
    e e e e e 4 e e 4 e e e e e . . 
    . e e e e e 4 4 e e e e e . . . 
    . . e e f e e e e f e e . . . . 
    . . f e e e 4 4 e e e f . . f f 
    . . f 4 e e f f e e 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 e e e e e e 4 4 5 f . 
    . . . f e e e e e 4 e e f f . . 
    . . . f e f f f e f f e f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
let cat1 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 e d d e 3 b f . . . . 
    e d d d e e d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d d d d d d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
let cat2 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c f f c . . c f f c . . . . 
    c b f f f f f f b c . . . . 
    c 3 d f f f f d 3 c . . . . 
    f b 3 d f f d 3 b f . . . . 
    e f f f d d f f f e . . . . 
    e f d f f f f d f e . b f b 
    f f f f f f f f f f . f d f 
    f b f f d d f f 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b f f f f f f b b d b f 
    . f f f f f f b f f f f f . 
    . f f f f f f f f f f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
let human1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f f f f f f f f f . . 
    . f f e f b f f f f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
//follow sprite
otherdog1.follow(player1, 15)
otherdog2.follow(player1, 15)
cat1.follow(player1, 15)
cat2.follow(player1, 15)
human1.follow(player1, 15)
// Controller
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
// Background
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(player1, sprites.castle.tilePath5)
tiles.placeOnRandomTile(bone, sprites.castle.tilePath5)
tiles.placeOnRandomTile(stick, sprites.castle.tilePath5)
tiles.placeOnRandomTile(tennisball, sprites.castle.tilePath5)
tiles.placeOnRandomTile(chewytoy, sprites.castle.tilePath5)
tiles.placeOnRandomTile(frisbee, sprites.castle.tilePath5)
tiles.placeOnRandomTile(rope, sprites.castle.tilePath8)
tiles.placeOnRandomTile(otherdog1, sprites.castle.tilePath5)
tiles.placeOnRandomTile(otherdog2, sprites.castle.tilePath5)
tiles.placeOnRandomTile(cat1, sprites.castle.tilePath4)
tiles.placeOnRandomTile(cat2, sprites.castle.tilePath5)
tiles.placeOnRandomTile(human1, sprites.castle.tilePath5)
tiles.placeOnRandomTile(shoes, sprites.castle.tilePath6)
tiles.placeOnRandomTile(stick2, sprites.castle.tilePath3)
