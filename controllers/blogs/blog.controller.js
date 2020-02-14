"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderVueBlog = function (request, response) {
    response.render('showcase/vue');
};
exports.renderVueBlog = renderVueBlog;
var renderFlutterBlog = function (request, response) {
    response.render('showcase/flutter');
};
exports.renderFlutterBlog = renderFlutterBlog;
var renderNodeBlog = function (request, response) {
    response.render('showcase/node');
};
exports.renderNodeBlog = renderNodeBlog;
var renderCatalogBlog = function (request, response) {
    response.render('showcase/catalogit');
};
exports.renderCatalogBlog = renderCatalogBlog;
