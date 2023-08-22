import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instanceCounts = 0;
  private _damageBy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instanceCounts += 1;
    this._damageBy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCounts;
  }

  get energyType(): EnergyType {
    return this._damageBy;
  }
}