import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this.specialLifePoints(999);
  }
}
