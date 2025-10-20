namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
let mySprite: Sprite = null
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 9 9 9 9 9 9 9 9 . . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . 9 9 f f 9 9 9 f f 9 9 9 . 
    . . 9 9 9 8 9 9 f 9 9 8 8 9 9 9 
    . . 9 9 9 8 9 f 9 f 9 8 8 9 9 9 
    . . 9 9 9 8 9 9 9 9 9 8 8 9 9 9 
    . . 9 9 . . 9 . 9 . 9 . 9 . 9 . 
    . 9 . 9 . . 9 . 9 . 9 . 9 . 9 9 
    . 9 . 9 . . 9 . 9 . 9 . 9 . . 9 
    9 9 . 9 . . 9 . 9 . 9 . 9 . . 9 
    . . . 9 . . 9 . 9 . 9 . 9 . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Crab Enemy`, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.NPC)
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 3 3 3 3 2 2 . . . . 
        . . . . 2 3 3 3 3 3 3 3 2 . . . 
        . . . 2 3 3 f 3 3 f 3 3 3 2 . . 
        . . 2 3 f 3 3 3 3 3 3 f 3 3 2 . 
        . . 2 3 3 f f f f f f 3 3 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . 3 . 
        . . 3 . 3 . . 3 . . 3 . 3 . 3 . 
        . 3 . . 3 . . . 3 . . 3 . . . 3 
        . 3 . . 3 . . 3 . . . 3 . . . 3 
        3 . . 3 . . . 3 . . . . 3 . 3 . 
        . . . 3 . . . . 3 . . . 3 . 3 . 
        `, SpriteKind.Player)
})
