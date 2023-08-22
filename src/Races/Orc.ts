import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instanceCounts = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instanceCounts += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCounts;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}