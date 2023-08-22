import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instanceCounts = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instanceCounts += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instanceCounts;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}