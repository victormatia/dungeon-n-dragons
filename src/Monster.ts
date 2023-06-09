import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number { return this._lifePoints; }

  protected specialLifePoints(newLifePoints: number): void { 
    this._lifePoints = newLifePoints; 
  }

  public get strength(): number { return this._strength; }

  public receiveDamage(attackPoints: number): number {
    const damage: number = this._lifePoints - attackPoints;

    if (damage < 0) this._lifePoints = -1;
    else this._lifePoints = damage;

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
