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
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let race = Races.find((r) => {
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
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.RaceRouter = RaceRouter;
const raceRoutes = new RaceRouter();
raceRoutes.init();
exports.default = raceRoutes.router;
