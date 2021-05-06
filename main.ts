huskylens.initI2c()
basic.forever(function () {
    serial.setBaudRate(BaudRate.BaudRate115200)
    serial.redirectToUSB()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
    serial.writeNumber(huskylens.readeBox(1, Content1.xCenter))
})
