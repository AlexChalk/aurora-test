const { assert } = require('chai');

const AbstractEntity = require('../abstract-entity');

describe('AbstractEntity', () => {
  it('has an id', () => {
    const abstractEntity = new AbstractEntity(
      'ddf0e980-5f52-49b0-a83c-a6a6aa6f0b6f',
    );

    assert.strictEqual(
      abstractEntity.id,
      'ddf0e980-5f52-49b0-a83c-a6a6aa6f0b6f',
    );
  });

  it('throws if not initialized with a valid uuid', () => {
    assert.throws(() => new AbstractEntity('not-a-uuid'));
  });
});
