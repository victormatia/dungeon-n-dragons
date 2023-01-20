import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: (SimpleFighter | Fighter)[],
  ) {
    super(_player);
    this._monsters = _monsters;
  }

  public fight(): number {
    const playerWasWinner = this._monsters.map((monster) => {
      this.player.attack(monster);
      monster.attack(this.player);

      return this.player.lifePoints !== -1;
    }).every((e) => e);

    return playerWasWinner ? 1 : -1;
  }
}
