// console.log("" + (input.rotation(Rotation.Pitch)))
basic.forever(function () {
    serial.writeValue("pitch", input.rotation(Rotation.Pitch))
    basic.pause(100)
})
