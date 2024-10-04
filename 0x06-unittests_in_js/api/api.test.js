const { expect } = require('chai');
const request = require('request');

const API_URL = 'http://localhost:7865/';

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct Content-Type header', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should respond within 200ms', function (done) {
    this.timeout(300); // Set timeout to 300ms for this test

    const start = Date.now();
    request.get(API_URL, (error, response, body) => {
      const duration = Date.now() - start;
      expect(duration).to.be.below(200);
      done();
    });
  });
});