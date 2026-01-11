const { StateK } = require('./StateK');

class QuadrotorOperators {
  static flip(stateK, bitIndex) {
    const arr = stateK.k.split('');
    arr[bitIndex] = arr[bitIndex] === '0' ? '1' : '0';
    return new StateK(arr.join(''));
  }
  
  static swap(stateK, i, j) {
    const arr = stateK.k.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return new StateK(arr.join(''));
  }
  
  static rotate(stateK, n) {
    const arr = stateK.k.split('');
    for (let i = 0; i < n; i++) {
      arr.unshift(arr.pop());
    }
    return new StateK(arr.join(''));
  }
  
  static mask(stateK, mask) {
    if (mask.length !== 6) throw new Error('Mask must be 6 bits');
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += (parseInt(stateK.k[i]) ^ parseInt(mask[i])).toString();
    }
    return new StateK(result);
  }
  
  static teleport(stateK, targetK) {
    return new StateK(targetK);
  }
  
  // Автоматичний пошук шляху між двома станами
  static findPath(startK, targetK, maxEnergy = 10) {
    const visited = new Set();
    const queue = [{ state: startK, path: [], energy: 0 }];
    
    while (queue.length > 0) {
      const { state, path, energy } = queue.shift();
      
      if (state.k === targetK.k) {
        return { success: true, path, energy, finalState: state };
      }
      
      if (energy >= maxEnergy) continue;
      
      // Генеруємо всі можливі переходи через flip
      for (let i = 0; i < 6; i++) {
        const newState = this.flip(state, i);
        const newEnergy = energy + 1;
        
        if (!visited.has(newState.k) && newEnergy <= maxEnergy) {
          visited.add(newState.k);
          queue.push({
            state: newState,
            path: [...path, { op: `F(${i})`, from: state.k, to: newState.k }],
            energy: newEnergy
          });
        }
      }
    }
    return { success: false, path: [], energy: 0 };
  }
}

module.exports = { QuadrotorOperators };
