import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instanceCounts = 0;
  private _damageBy: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instanceCounts += 1;
    this._damageBy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceCounts;
  }

  get energyType(): EnergyType {
    return this._damageBy;
  }
}