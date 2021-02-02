const { assert } = require('chai');
const { createEmployee } = require('./helpers');

describe('employee', () => {
  it('should report if available for a given day', () => {
    const employee = createEmployee({
      availabilityForWeek: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
      },
    });

    assert.isTrue(employee.isAvailable('monday'));
  });

  it('should report if not available for a given day', () => {
    const employee = createEmployee({
      availabilityForWeek: {
        monday: false,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
      },
    });

    assert.isFalse(employee.isAvailable('monday'));
  });

  it('should return qualification', () => {
    const employee = createEmployee({
      qualification: 'certified_installer',
    });

    assert.strictEqual(employee.qualification, 'certified_installer');
  });

  it('should have unique identifier', () => {
    const employee = createEmployee({
      id: 'a4fb9025-ad0d-4698-ae64-c4d70014bfb2',
    });

    assert.strictEqual(employee.id, 'a4fb9025-ad0d-4698-ae64-c4d70014bfb2');
  });

  it('should reject invalid qualification on instantiation', () => {
    assert.throws(() => createEmployee({
      qualification: 'electrician',
    }));
  });

  it('should reject invalid availability on instantiation', () => {
    assert.throws(() => createEmployee({
      availabilityForWeek: {
        monda: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
      },
    }));
  });
});
