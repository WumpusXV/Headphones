basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(988)
    } else if (input.buttonIsPressed(Button.B)) {
        music.ringTone(247)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
