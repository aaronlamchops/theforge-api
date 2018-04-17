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

    public init() {
        this.router.get('/', this.getAll);
    }

}


const classRoutes = new ClassRouter();
classRoutes.init();

export default classRoutes.router;