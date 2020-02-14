import { Request, Response } from 'express';

const renderVueBlog = (request: Request, response: Response) => {
    response.render('showcase/vue');
}

const renderFlutterBlog = (request: Request, response: Response) => {
    response.render('showcase/flutter');
}


const renderNodeBlog = (request: Request, response: Response) => {
    response.render('showcase/node');
}

const renderCatalogBlog = (request: Request, response: Response) => {
    response.render('showcase/catalogit');
}

export {
    renderVueBlog,
    renderFlutterBlog,
    renderNodeBlog,
    renderCatalogBlog
}