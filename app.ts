import express, { Application, Request, Response, NextFunction  } from 'express';
import path from 'path';

class Server {
    private app: Application;
    private env: number|string = process.env.PORT || 'dev';
    private port: number|string = process.env.PORT || 5200;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setRouter();
        this.run();
    }

    private setConfig(): void {
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../../src/server/views'));
        this.app.engine('hbs', exphbs({
            defaultLayout: 'index',
            extname: 'hbs',
            layoutsDir: path.join(__dirname, '../../src/server/views/layouts'),
            partialsDir: path.join(__dirname, '../../src/server/views'),
        }));

        this.app.use((request: Request, response: Response, next: NextFunction) => {
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            response.header('Content-Security-Policy', "default-src 'self'");
            next();
        });

        this.app.enable('trust proxy');
        this.app.set('port', this.port);
    }


    private setRouter(): void {}

    private run(): void { 
        this.app.listen(this.port, () => {
            console.log('Express Server Running in mode', this.env);
            console.log('Express Server Running in port', this.port);
        });
    }
}

