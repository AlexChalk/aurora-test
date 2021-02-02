const { assert } = require('chai');

const schedule = require('../schedule');
const SingleStoryHome = require('../single-story-home');
const { createEmployee } = require('./helpers');

describe('schedule()', () => {
  it('should assign one certified_installer to one of five one story homes on each day', () => {
    const employee = createEmployee({ qualification: 'certified_installer' });
    const buildings = new Array(5)
      .fill(null)
      .map(() => SingleStoryHome.create());
    const [home1, home2, home3, home4, home5] = buildings;

    const result = schedule(buildings, [employee]);

    assert.strictEqual(result.length, 1);

    const [employeeSchedule] = result;

    assert.strictEqual(employeeSchedule.employeeId, employee.id);
    assert.strictEqual(employeeSchedule.monday, home1.id);
    assert.strictEqual(employeeSchedule.tuesday, home2.id);
    assert.strictEqual(employeeSchedule.monday, home3.id);
    assert.strictEqual(employeeSchedule.monday, home4.id);
    assert.strictEqual(employeeSchedule.monday, home5.id);
  });
});
