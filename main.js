const axios = require('axios')
const dotenv = require('dotenv')
//const TEMPERATURE_SENSOR_LIB = require("lib")
const envLoaded = dotenv.config()
const sensor = {
    id: 123,
    location: "A",
    temperature: 0,
    time: new Date().toISOString()
}


if (envLoaded.error) {
    throw envLoaded.error
}
const controllerURL = process.env.CONTROLLER_URL

function eventLoop(){
    sensor.time = new Date().toISOString()
    //sensor.temperature = TEMPERATURE FROM SENSOR
    axios.post(`${controllerURL}/sensorSubmit`, sensor)
        .then((res, req) => {
            console.log(response.body)
        }).catch((err) => {
            console.log(err)
            retry()
        })
    console.log("Hello world")
}

function retry() {
    clearInterval(eventLoop)
    let retryCount = 0
    let retryInterval = setInterval(() => {
        if (retryCount > 3) {
            clearInterval(retryInterval)
            return
        }
        axios.post(`${controllerURL}/sensorSubmit`, sensor)
            .then((res, req) => {
                console.log(response.body)
                clearInterval(retryInterval)
                return
            }).catch((err) => {
                console.log(err)
                return
            })
    }, 20000)
    eventLoop = setInterval(eventLoop, 60 * 1000)
}
//60 second interval loop

var eventLoop = setInterval(eventLoop, 60 * 1000)

