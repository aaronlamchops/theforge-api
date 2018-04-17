import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import ClassRouter from './routes/ClassRouter';
import RaceRouter from './routes/RaceRouter';

class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    let router = express.Router();
    
    // placeholder route handler for base route
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });

    // routes in use
    this.express.use('/', router);
    this.express.use('/api/v1/classes', ClassRouter);
    this.express.use('/api/v1/races', RaceRouter);
  }

}

export default new App().express;