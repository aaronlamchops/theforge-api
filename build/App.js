"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const ClassRouter_1 = require("./routes/ClassRouter");
const RaceRouter_1 = require("./routes/RaceRouter");
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        // placeholder route handler for base route
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        // routes in use
        this.express.use('/', router);
        this.express.use('/api/v1/classes', ClassRouter_1.default);
        this.express.use('/api/v1/races', RaceRouter_1.default);
    }
}
exports.default = new App().express;
