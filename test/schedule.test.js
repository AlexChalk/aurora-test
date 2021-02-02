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

    const result = schedule(buildings, [employee]);

    assert.strictEqual(result.length, 1);

    const [employeeSchedule] = result;

    assert.strictEqual(employeeSchedule.employeeId, employee.id);
    assert.strictEqual(employeeSchedule.monday, buildings[0].id);
    assert.strictEqual(employeeSchedule.tuesday, buildings[1].id);
    assert.strictEqual(employeeSchedule.wednesday, buildings[2].id);
    assert.strictEqual(employeeSchedule.thursday, buildings[3].id);
    assert.strictEqual(employeeSchedule.friday, buildings[4].id);
  });
});
