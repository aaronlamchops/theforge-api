import { Router, Request, Response, NextFunction } from 'express';
const Classes = require('../classData');


export class ClassRouter {

    public router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.send(Classes);
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let clss = Classes.find((c) =>{
            return c.id == query;
        });
        if (clss) {
          res.status(200)
            .send({
              message: 'Success',
              status: res.status,
              clss
            });
        }
        else {
          res.status(404)
            .send({
              message: 'No class found with the given id.',
              status: res.status
            });
        }
    }

    public init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }

}


const classRoutes = new ClassRouter();
classRoutes.init();

export default classRoutes.router;