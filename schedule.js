const EmployeeSchedule = require('./employee-schedule');

function schedule(buildings, employees) {
  const schedules = employees.map((employee) => EmployeeSchedule.createEmptyForWeek(employee));

  for (const day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']) {
    buildings.forEach((building) => building.tryToSchedule(day, schedules));
  }
  return schedules;
}

module.exports = schedule;
