import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instanceCounts = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCounts += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instanceCounts;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}