SGBotic.init_PWS(AnalogPin.P0, AnalogPin.P1)

input.onButtonPressed(Button.A, () => {
    pins.analogWritePin(AnalogPin.P1, 512)
})
