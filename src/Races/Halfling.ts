import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dixterity: number) {
    super(name, dixterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this._instances;
  }
}
