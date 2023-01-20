import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(public name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints * 0.5;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
  }

  public get race(): Race { return this._race; }

  public get archetype(): Archetype { return this._archetype; }

  public get lifePoints(): number { return this._lifePoints; }

  public get strength(): number { return this._strength; }

  public get defense(): number { return this._defense; }

  public get dexterity(): number { return this._dexterity; }

  public get energy(): Energy { return { ...this._energy }; }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;
    if (damage === 0) this._lifePoints -= 1;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    const currentLifePoints = this._maxLifePoints + getRandomInt(1, 10);

    if (currentLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    if (currentLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = currentLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  public special(enemy: Fighter): void {
    const defenseIgnored: number = enemy.defense * 0.6;
    enemy.receiveDamage(this._strength + defenseIgnored);
  }
}