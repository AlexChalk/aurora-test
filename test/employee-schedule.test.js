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

  it('returns employee id', () => {
    const employee = createEmployee({
      id: 'd0cb5f0e-71a8-49dd-97df-eb6f4a8b8b26',
    });

    const result = EmployeeSchedule.createEmptyForWeek(employee);

    assert.strictEqual(
      result.employeeId,
      'd0cb5f0e-71a8-49dd-97df-eb6f4a8b8b26',
    );
  });

  it('returns employee qualification', () => {
    const employee = createEmployee({
      qualification: 'handyman',
    });

    const result = EmployeeSchedule.createEmptyForWeek(employee);

    assert.strictEqual(result.employeeQualification, 'handyman');
  });
});
