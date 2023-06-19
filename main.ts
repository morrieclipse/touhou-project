sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`touhoubg`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f 2 f . f 2 f . . . . . 
    . . . f 2 2 2 f 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f 1 e e e e e 1 f . . . . 
    . . f 1 1 e e e e e 1 1 f . . . 
    . . f 1 1 2 e e e 2 1 1 f . . . 
    . . f d d 2 2 2 2 2 d d f . . . 
    . . f f 2 2 2 2 2 2 2 f f . . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(75, 85)
controller.moveSprite(mySprite, 100, 100)
info.setLife(10)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`bullet`, 0, 100)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(0, 175)
})
forever(function () {
    info.changeScoreBy(1)
    pause(1000)
})
game.onUpdateInterval(100, function () {
    projectile = sprites.createProjectileFromSide(assets.image`bullet`, 0, 100)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(0, 175)
})
