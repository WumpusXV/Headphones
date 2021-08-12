def on_forever():
    if input.button_is_pressed(Button.A):
        music.ring_tone(988)
    elif input.button_is_pressed(Button.B):
        music.ring_tone(247)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)
