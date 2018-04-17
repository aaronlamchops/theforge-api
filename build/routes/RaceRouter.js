"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Races = require('../raceData');
class RaceRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.send(Races);
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.RaceRouter = RaceRouter;
const raceRoutes = new RaceRouter();
raceRoutes.init();
exports.default = raceRoutes.router;
