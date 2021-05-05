input.onButtonPressed(Button.A, function () {
    sound_enabled = false
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    sound_enabled = true
})
let sound_enabled = false
sound_enabled = false
basic.forever(function () {
    if (sound_enabled) {
        // use the map block for the rotation (pitch) instead of <127>
        music.setVolume(127)
        // use the map block for the rotation (roll) instead of Middle C
        music.ringTone(262)
    }
})
