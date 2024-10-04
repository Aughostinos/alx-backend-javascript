const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return { data: "Successful response from the API" } when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        try {
          expect(response).to.be.an('object');
          expect(response).to.have.property('data');
          expect(response.data).to.equal('Successful response from the API');
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch((error) => {
        done(error);
      });
  });
});
