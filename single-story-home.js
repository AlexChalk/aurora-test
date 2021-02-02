const AbstractEntity = require('./abstract-entity');

class SingleStoryHome extends AbstractEntity {
  #isScheduled;

  constructor({ id, isScheduled }) {
    super(id);
    this.#isScheduled = isScheduled;
  }

  _canBeScheduled(day, schedules) {
    return schedules.some(
      (schedule) => schedule.hasOpening(day)
        && schedule.employeeQualification === 'certified_installer',
    );
  }

  _addToSchedules(day, schedules) {
    const chosenSchedule = schedules.find(
      (schedule) => schedule.hasOpening(day)
        && schedule.employeeQualification === 'certified_installer',
    );
    chosenSchedule[day] = this.id;
  }

  tryToSchedule(day, schedules) {
    if (!this.#isScheduled && this._canBeScheduled(day, schedules)) {
      this._addToSchedules(day, schedules);
      this.#isScheduled = true;
    }
  }
}

module.exports = SingleStoryHome;
