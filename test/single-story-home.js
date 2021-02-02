const { assert } = require('chai');

const { createEmployee } = require('./helpers');
const SingleStoryHome = require('../single-story-home');
const EmployeeSchedule = require('../employee-schedule');
const noBuilding = require('../no-building');

describe('SingleStoryHome', () => {
  describe('tryToSchedule', () => {
    it('updates schedules when workers are sufficent', () => {
      const employee = createEmployee({ qualification: 'certified_installer' });
      const schedule = EmployeeSchedule.createEmptyForWeek(employee);

      const building = new SingleStoryHome({
        id: '04ca5a68-edef-464b-a33d-3b82047a6961',
        isScheduled: false,
      });

      building.tryToSchedule('monday', [schedule]);

      assert.strictEqual(schedule.monday, building.id);
    });

    it('does not update schedules when workers are not sufficent', () => {
      const employee = createEmployee({ qualification: 'handyman' });
      const schedule = EmployeeSchedule.createEmptyForWeek(employee);

      const building = new SingleStoryHome({
        id: '04ca5a68-edef-464b-a33d-3b82047a6961',
        isScheduled: false,
      });

      building.tryToSchedule('monday', [schedule]);

      assert.strictEqual(schedule.monday, noBuilding.id);
    });

    it('does not update schedules when already scheduled', () => {
      const employee = createEmployee({ qualification: 'certified_installer' });
      const schedule = EmployeeSchedule.createEmptyForWeek(employee);

      const building = new SingleStoryHome({
        id: '04ca5a68-edef-464b-a33d-3b82047a6961',
        isScheduled: true,
      });

      building.tryToSchedule('monday', [schedule]);

      assert.strictEqual(schedule.monday, noBuilding.id);
    });
  });
});
