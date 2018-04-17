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
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.ClassRouter = ClassRouter;
const classRoutes = new ClassRouter();
classRoutes.init();
exports.default = classRoutes.router;
