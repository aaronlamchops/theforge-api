import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/races', () => {

  // unit test to check against length of returned JSON array
  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/races')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(3);
      });
  });

  // unit test to check if Elf is included in JSON array
  it('should include Elf', () => {
    return chai.request(app).get('/api/v1/races')
      .then(res => {
        let Elf = res.body.find(Race => Race.name === 'elf');
        expect(Elf).to.exist;
        expect(Elf).to.have.all.keys([
          'id',
          'name',
          'abilityScore',
          'age',
          'alignment',
          'size',
          'sizeDescription',
          'speed',
          'language'
        ]);
      });
  });

});