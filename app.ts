import express, { Application, Request, Response, NextFunction  } from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import homeRouter from './routes/home';
import blogRouter from './routes/blogs';

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
        this.app.set('views', path.join(__dirname, './views'));
        this.app.engine('hbs', exphbs({
            defaultLayout: 'main',
            extname: 'hbs',
        }));

        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use((_: Request, response: Response, next: NextFunction) => {
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            // response.header('Content-Security-Policy', "default-src 'self'");
            next();
        });

        this.app.enable('trust proxy');
        this.app.set('port', this.port);
    }


    private setRouter(): void {
        this.app.use('/', homeRouter);
        this.app.use('/showcase', blogRouter);
    }

    private run(): void { 
        this.app.listen(this.port, () => {
            console.log('Express Server Running in mode', this.env);
            console.log('Express Server Running in port', this.port);
        });
    }
}

new Server();