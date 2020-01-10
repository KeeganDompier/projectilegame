function hose () {
    Hose = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 d 7 7 7 7 7 7 7 7 7 7 7 7 7 
9 9 d 7 7 7 7 7 7 7 7 7 7 7 7 7 
9 9 d 7 7 7 7 7 7 7 7 7 7 7 7 7 
9 9 d 7 7 7 7 7 7 7 7 7 7 7 7 7 
9 9 d 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Hose.setPosition(80, 100)
    controller.moveSprite(Hose)
}
function Projectile2 () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hose, 50, 0)
    projectile.setPosition(0, Math.randomRange(0, 120))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let Hose: Sprite = null
hose()
game.onUpdate(function () {
    Projectile2()
})
