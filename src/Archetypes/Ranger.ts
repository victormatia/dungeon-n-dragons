import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  // métodos estáticos têm acesso ao this
  static createdArchetypeInstances() {
    return this._instances;
  }
}
