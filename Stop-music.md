#How to stop music

## Play a melody when button A pressed

```blocks
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
```

## Stop a melody by playing an empty array when button B pressed

```blocks
input.onButtonPressed(Button.B, function () {
    music.startMelody([], MelodyOptions.Once)
})
```
