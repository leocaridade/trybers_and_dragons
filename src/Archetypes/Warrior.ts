import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instanceCounts = 0;
  private _damageBy: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instanceCounts += 1;
    this._damageBy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCounts;
  }

  get energyType(): EnergyType {
    return this._damageBy;
  }
}