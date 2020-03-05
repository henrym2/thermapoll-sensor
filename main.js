const axios = require('axios')


eventLoop = () => {
    console.log("Hello world")
}

setInterval(eventLoop(), 1500)

