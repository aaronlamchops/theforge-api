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

    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let race = Races.find((r) =>{
            return r.id == query;
        });
        if (race) {
          res.status(200)
            .send({
              message: 'Success',
              status: res.status,
              race
            });
        }
        else {
          res.status(404)
            .send({
              message: 'No race found with the given id.',
              status: res.status
            });
        }
    }

    public init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }

}


const raceRoutes = new RaceRouter();
raceRoutes.init();

export default raceRoutes.router;