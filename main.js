kaboom({
	width: 1280,
	height: 720
})

setBackground(Color.fromHex('#36A6E0'))
loadSprite('player', 'assets/mario.png')

const mario = add([
	sprite('player'),
	pos(80, 100),
	scale(0.5),
	area(),
	body(),
])

setGravity(1600)

// jump function
onKeyPress("space", () => {
	mario.jump()
})