const Employee = require('../employee');

function createEmployee({ id, qualification, availabilityForWeek } = {}) {
  const _id = id || 'a4fb9025-ad0d-4698-ae64-c4d70014bfb2';
  const _qualification = qualification || 'certified_installer';
  const _availability = availabilityForWeek || {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
  };

  return new Employee({
    id: _id,
    qualification: _qualification,
    availabilityForWeek: _availability,
  });
}

module.exports = { createEmployee };
