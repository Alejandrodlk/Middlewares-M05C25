const fs = require('fs')
const path = require('path')

// El usuario ingreso la ruta:

const userLogs = (req,res,next) => {
    
    fs.appendFileSync(path.resolve(__dirname , '..' , 'logs' , 'userLogs.txt') , 'El usuario ingreso a la ruta: ' + req.url + '\n' ),
    next()
}

module.exports = userLogs