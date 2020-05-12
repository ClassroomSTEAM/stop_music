input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody([], MelodyOptions.Once)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
