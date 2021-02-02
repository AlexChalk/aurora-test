const AbstractEntity = require('./abstract-entity');

const NO_BUILDING_ID = 'bb57be8f-541d-44ab-9b8a-ba30dc040a8c';

class NoBuilding extends AbstractEntity {
  constructor() {
    super(NO_BUILDING_ID);
  }

  tryToSchedule() {
    return undefined;
  }
}

module.exports = new NoBuilding();
