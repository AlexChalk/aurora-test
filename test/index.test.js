const { assert } = require('chai');
const schedule = require('../index');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('returns undefined', async () => {
      assert.strictEqual(schedule(), undefined);
    });
  });
});
