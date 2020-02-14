"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var home_controller_1 = require("../controllers/home/home.controller");
var homeRouter = express_1.Router();
homeRouter.get('/', home_controller_1.renderHomeScreen);
exports.default = homeRouter;
