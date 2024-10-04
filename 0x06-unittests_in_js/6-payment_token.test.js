const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return { data: "Successful response from the API" } when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.property('data');
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not resolve or reject when success is false', (done) => {
    const timeout = setTimeout(() => {
      done(new Error('Promise did not resolve or reject as expected.'));
    }, 100);

    getPaymentTokenFromAPI(false)
      .then(() => {
        clearTimeout(timeout);
        done(new Error('Promise should not have resolved.'));
      })
      .catch(() => {
        clearTimeout(timeout);
        done(new Error('Promise should not have rejected.'));
      });
  });
});
