input.onPinPressed(TouchPin.P0, function () {
    if (Character.get(LedSpriteProperty.Y) <= 0) {
        LifeNum += -1
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
    } else {
        Character.change(LedSpriteProperty.Y, -1)
    }
})
input.onButtonPressed(Button.A, function () {
    if (Character.get(LedSpriteProperty.X) <= 0) {
        LifeNum += -1
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
    } else {
        Character.change(LedSpriteProperty.X, -1)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Character.get(LedSpriteProperty.Y) >= 4) {
        LifeNum += -1
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
    } else {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Character.get(LedSpriteProperty.X) >= 4) {
        LifeNum += -1
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
    } else {
        Character.change(LedSpriteProperty.X, 1)
    }
})
let EnemyMove = 0
let Character: game.LedSprite = null
Character = game.createSprite(2, 2)
let LifeNum = 10
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
Enemy.set(LedSpriteProperty.Blink, 2)
game.setScore(0)
loops.everyInterval(1000, function () {
    EnemyMove = randint(1, 4)
    if (EnemyMove == 1) {
        Enemy.change(LedSpriteProperty.X, 1)
    } else if (EnemyMove == 2) {
        Enemy.change(LedSpriteProperty.X, -1)
    } else if (EnemyMove == 3) {
        Enemy.change(LedSpriteProperty.Y, 1)
    } else {
        Enemy.change(LedSpriteProperty.Y, -1)
    }
})
basic.forever(function () {
    if (Character.isTouching(Enemy)) {
        LifeNum += -1
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
    }
    if (LifeNum == 0) {
        game.gameOver()
    }
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2)))) {
        game.addScore(1)
    }
})
