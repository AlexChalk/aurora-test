const z = require('zod');

const AbstractEntity = require('./abstract-entity');

const qualificationSchema = z.union([
  z.literal('certified_installer'),
  z.literal('installer_pending_certification'),
  z.literal('handyman'),
]);

const availabilitySchema = z.object({
  monday: z.boolean(),
  tuesday: z.boolean(),
  wednesday: z.boolean(),
  thursday: z.boolean(),
  friday: z.boolean(),
});

class Employee extends AbstractEntity {
  #qualification;

  #availabilityForWeek;

  constructor({ id, qualification, availabilityForWeek }) {
    super(id);

    qualificationSchema.parse(qualification);
    availabilitySchema.parse(availabilityForWeek);

    this.#qualification = qualification;

    this.#availabilityForWeek = availabilityForWeek;
  }

  get qualification() {
    return this.#qualification;
  }

  isAvailable(day) {
    return this.#availabilityForWeek[day];
  }
}

module.exports = Employee;
