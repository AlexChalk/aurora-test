const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('supports integration tests', async () => {
      const response = await request(app).get('/');

      assert.deepEqual(response.body, { data: 'Hello World' });
    });
  });
});
