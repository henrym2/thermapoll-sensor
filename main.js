const axios = require('axios')
const dotenv = require('dotenv')

const envLoaded = dotenv.config()

if (envLoaded.error) {
    throw envLoaded.error
}
const controllerURL = process.env.CONTROLLER_URL

function register() {
    
}
function eventLoop(){
    console.log("Hello world")
}

setInterval(eventLoop, 1500)

