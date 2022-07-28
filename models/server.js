const express = require('express');
const cors = require('cors');
const sequelizeDB = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        this.pahts = {
                auth: '/api/auth',
        }
    
      
        
        //conectar DB
        this.conectarDb();
        
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }
    
    async conectarDb(){
        await sequelizeDB.sync()
        console.log('Connection has been established successfully ' ); 

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );



    }

    routes() {
        this.app.use( this.pahts.auth, require('../routes/auth'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;