import { Router, Request, Response, NextFunction } from 'express';
const Races = require('../raceData');


export class RaceRouter {

    public router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.send(Races);
    }

    public init() {
        this.router.get('/', this.getAll);
    }

}


const raceRoutes = new RaceRouter();
raceRoutes.init();

export default raceRoutes.router;