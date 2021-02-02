const { assert } = require('chai');

const { createEmployee } = require('./helpers');
const EmployeeSchedule = require('../employee-schedule');
const noBuilding = require('../no-building');

describe('EmployeeSchedule', () => {
  describe('createEmptyForWeek', () => {
    it('creates empty schedule for employee', () => {
      const employee = createEmployee();
      const result = EmployeeSchedule.createEmptyForWeek(employee);

      assert.strictEqual(result.employeeId, employee.id);
      assert.strictEqual(result.monday, noBuilding.id);
      assert.strictEqual(result.tuesday, noBuilding.id);
      assert.strictEqual(result.wednesday, noBuilding.id);
      assert.strictEqual(result.thursday, noBuilding.id);
      assert.strictEqual(result.friday, noBuilding.id);
    });
  });

  it.skip('can be updated with new id', () => {
  });
});
