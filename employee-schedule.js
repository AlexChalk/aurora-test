const { v4: uuidv4 } = require('uuid');

const AbstractEntity = require('./abstract-entity');
const Employee = require('./employee');
const noBuilding = require('./no-building');

class EmployeeSchedule extends AbstractEntity {
  #employee;

  monday;

  tuesday;

  wednesday;

  thursday;

  friday;

  static createEmptyForWeek(employee) {
    return new EmployeeSchedule({
      id: uuidv4(),
      employee,
      monday: noBuilding.id,
      tuesday: noBuilding.id,
      wednesday: noBuilding.id,
      thursday: noBuilding.id,
      friday: noBuilding.id,
    });
  }

  constructor({
    id, employee, monday, tuesday, wednesday, thursday, friday,
  }) {
    super(id);

    if (!(employee instanceof Employee)) {
      throw new Error('object must be initialized with valid Employee');
    }

    this.#employee = employee;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
  }

  get employeeId() {
    return this.#employee.id;
  }

  get employeeQualification() {
    return this.#employee.qualification;
  }

  hasOpening(day) {
    return this.#employee.isAvailable(day) && this[day] === noBuilding.id;
  }
}

module.exports = EmployeeSchedule;
