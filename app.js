"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var path_1 = __importDefault(require("path"));
var home_1 = __importDefault(require("./routes/home"));
var blogs_1 = __importDefault(require("./routes/blogs"));
var Server = /** @class */ (function () {
    function Server() {
        this.env = process.env.PORT || 'dev';
        this.port = process.env.PORT || 5200;
        this.app = express_1.default();
        this.setConfig();
        this.setRouter();
        this.run();
    }
    Server.prototype.setConfig = function () {
        this.app.set('view engine', 'hbs');
        this.app.set('views', path_1.default.join(__dirname, './views'));
        this.app.engine('hbs', express_handlebars_1.default({
            defaultLayout: 'main',
            extname: 'hbs',
        }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        this.app.use(function (_, response, next) {
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            // response.header('Content-Security-Policy', "default-src 'self'");
            next();
        });
        this.app.enable('trust proxy');
        this.app.set('port', this.port);
    };
    Server.prototype.setRouter = function () {
        this.app.use('/', home_1.default);
        this.app.use('/showcase', blogs_1.default);
    };
    Server.prototype.run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Express Server Running in mode', _this.env);
            console.log('Express Server Running in port', _this.port);
        });
    };
    return Server;
}());
new Server();
