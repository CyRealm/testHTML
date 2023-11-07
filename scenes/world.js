function setWorld(worldState){
	function makeTile(type) {
		return [
			sprite('tile'),
			{type}
		]
	}

	const player = add([
		sprite('player'),
		pos(0, 0),
		area(),
		body(),
		health(10),
		"player",
		"friendly",
		{
			dir: RIGHT,
			dead: false,
			speed: 240
		},
	])

	player.moveTo(300, 200)

	let tick = 0
	onUpdate(()=>{
		camPos(player.pos)
		tick++
		if ((isKeyDown('down') || isKeyDown('up'))
			&& tick % 20 === 0
			&& !player.isInDialogue) {
			player.flipX = !player.flipX
		}
	})
}