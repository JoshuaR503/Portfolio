import { Request, Response } from 'express';

/**
 * Searches all collections.
 * @param request 
 * @param response 
 */
const renderHomeScreen = (request: Request, response: Response) => {

    response.render('home/home');

}

export {
    renderHomeScreen
}