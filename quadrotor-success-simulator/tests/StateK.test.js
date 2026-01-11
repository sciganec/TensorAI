import { describe, test, expect } from '@jest/globals';
import StateK from '../src/core/StateK.js';

describe('StateK', () => {
  test('charge calculation and mappings', () => {
    const s = new StateK('101010');
    expect(s.k).toBe('101010');
    const charge = s.charge;
    expect(typeof charge.total).toBe('number');

    const dn = s.toDnator();
    expect(dn).toHaveProperty('codon');
    const cym = s.toCymtor();
    expect(cym).toHaveProperty('complexity');
  });
});
