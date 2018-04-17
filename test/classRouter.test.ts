import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/classes', () => {

  // unit test to check against length of returned JSON array
  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/classes')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(1);
      });
  });

  // unit test to check if Barbarian is included in JSON array
  it('should include Barbarian', () => {
    return chai.request(app).get('/api/v1/classes')
      .then(res => {
        let Barbarian = res.body.find(Class => Class.name === 'barbarian');
        expect(Barbarian).to.exist;
        expect(Barbarian).to.have.all.keys([
          'id',
          'name',
          'hitDice',
          'proficiencies',
          'startEquipment',
          'features',
          'table'
        ]);
      });
  });

});

describe('GET api/v1/classes/:id', () => {

  it('responds with single JSON object', () => {
    return chai.request(app).get('/api/v1/classes/1')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('should return barbarian', () => {
    return chai.request(app).get('/api/v1/classes/1')
      .then(res => {
        expect(res.body.clss.name).to.equal('barbarian');
      });
  });

});