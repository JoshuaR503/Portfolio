import { Request, Response } from 'express';


const renderHomeScreen = (_: Request, response: Response) => {
    response.render('home/home');
}

const renderAboutScreen = (_: Request, response: Response) => {
    response.render('home/about');
}

export {
    renderAboutScreen,
    renderHomeScreen
}