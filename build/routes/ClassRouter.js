"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Classes = require('../classData');
class ClassRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.send(Classes);
    }
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let clss = Classes.find((c) => {
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
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.ClassRouter = ClassRouter;
const classRoutes = new ClassRouter();
classRoutes.init();
exports.default = classRoutes.router;
