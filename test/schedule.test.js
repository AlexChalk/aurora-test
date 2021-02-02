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

  it('should assign buildings more quickly when more certified_installers', () => {
    const employee1 = createEmployee({
      id: 'd9ba1f0e-2b09-405b-aaea-b43e54a30389',
      qualification: 'certified_installer',
    });
    const employee2 = createEmployee({
      id: '08a40ef4-af77-497e-97cc-c37873a61f1b',
      qualification: 'certified_installer',
    });

    const buildings = new Array(5)
      .fill(null)
      .map(() => SingleStoryHome.create());

    const result = schedule(buildings, [employee1, employee2]);

    assert.strictEqual(result.length, 2);

    const employee1Schedule = result.find((s) => s.employeeId === employee1.id);
    const employee2Schedule = result.find((s) => s.employeeId === employee2.id);

    assert.strictEqual(employee1Schedule.monday, buildings[0].id);
    assert.strictEqual(employee2Schedule.monday, buildings[1].id);
    assert.strictEqual(employee1Schedule.tuesday, buildings[2].id);
    assert.strictEqual(employee2Schedule.tuesday, buildings[3].id);
    assert.strictEqual(employee1Schedule.wednesday, buildings[4].id);
  });
});
