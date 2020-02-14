"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var blog_controller_1 = require("../controllers/blogs/blog.controller");
var blogRouter = express_1.Router();
blogRouter.get('/vue', blog_controller_1.renderVueBlog);
blogRouter.get('/flutter', blog_controller_1.renderFlutterBlog);
blogRouter.get('/node', blog_controller_1.renderNodeBlog);
blogRouter.get('/catalogit', blog_controller_1.renderCatalogBlog);
exports.default = blogRouter;
