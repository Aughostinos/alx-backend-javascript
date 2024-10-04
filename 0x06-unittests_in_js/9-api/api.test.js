const { expect } = require('chai');
const request = require('request');

const API_URL = 'http://localhost:7865/';

describe('API', () => {
  describe('GET /', () => {
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
  });

  describe('GET /cart/:id', () => {
    const validCartId = 12;
    const invalidCartId = 'hello';

    it('should return status code 200 when :id is a number', (done) => {
      request.get(`${API_URL}cart/${validCartId}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct message when :id is a number', (done) => {
      request.get(`${API_URL}cart/${validCartId}`, (error, response, body) => {
        expect(body).to.equal(`Payment methods for cart ${validCartId}`);
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      request.get(`${API_URL}cart/${invalidCartId}`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('should return 404 status and appropriate message when :id is not a number', (done) => {
      request.get(`${API_URL}cart/${invalidCartId}`, (error, response, body) => {
        expect(body).to.include('Cannot GET /cart/hello');
        done();
      });
    });
  });
});
