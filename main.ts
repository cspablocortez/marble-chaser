scene.setBackgroundColor(0)
let spaceMonkey = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f e e e e e f . . . 
. . . . . f e e e d d d d f . . 
. . . . f f e e d f d d f d c . 
. . . f d d e e d f d d f d c . 
. . . c d b e e d d d d e e d c 
f f . c d b e e d d c d d d d c 
f e f . c f e e d d d c c c c c 
f e f . . f f e e d d d d d f . 
f e f . f e e e e f f f f f . . 
f e f f e e e e e e e f . . . . 
. f f e e e e f e f f e f . . . 
. . f e e e e f e f f e f . . . 
. . . f e f f b d f b d f . . . 
. . . f d b b d d c d d f . . . 
. . . f f f f f f f f f . . . . 
`, SpriteKind.Player)

controller.moveSprite(spaceMonkey, 200, 200)

let food = sprites.create(img`
. . . . . b b b b b b . . . . .
. . . b b 9 9 9 9 9 9 b b . . .
. . b b 9 9 9 9 9 9 9 9 b b . .
. b b 9 d 9 9 9 9 9 9 9 9 b b .
. b 9 d 9 9 9 9 9 1 1 1 9 9 b .
b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b
b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b
b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b
b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b
b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b
b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b
. b 5 3 3 3 d 9 9 9 9 d d 5 b .
. b d 5 3 3 3 3 3 3 3 d 5 b b .
. . b d 5 d 3 3 3 3 5 5 b b . .
. . . b b 5 5 5 5 5 5 b b . . .
. . . . . b b b b b b . . . . .
`, SpriteKind.Food)


// Collision Detection

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(1)
})

