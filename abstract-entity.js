const validator = require('validator');

class AbstractEntity {
  #id;

  constructor(id) {
    if (!validator.isUUID(id, 4)) {
      throw new Error('id must be a valid uuidv4');
    }
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

module.exports = AbstractEntity;
