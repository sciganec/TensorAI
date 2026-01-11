class StateK {
  constructor(binaryString) {
    if (binaryString.length !== 6) throw new Error('K must be 6 bits');
    this.k = binaryString;
    this.kArray = binaryString.split('').map(Number);
  }
  
  // Гетер для заряду
  get charge() {
    const qx = (this.kArray[1] + this.kArray[0] === 2) ? 2 : 
               (this.kArray[1] + this.kArray[0] === 0) ? -2 : 0;
    const qy = (this.kArray[3] + this.kArray[2] === 2) ? 2 : 
               (this.kArray[3] + this.kArray[2] === 0) ? -2 : 0;
    const qz = (this.kArray[5] + this.kArray[4] === 2) ? 2 : 
               (this.kArray[5] + this.kArray[4] === 0) ? -2 : 0;
    return { x: qx, y: qy, z: qz, total: qx + qy + qz };
  }
  
  // Маппінг до Dnator (генетичний код)
  toDnator() {
    const dnaMap = { '00': 'A', '01': 'U', '10': 'G', '11': 'C' };
    const x = this.k.slice(0, 2), y = this.k.slice(2, 4), z = this.k.slice(4, 6);
    return {
      codon: dnaMap[x] + dnaMap[y] + dnaMap[z],
      aminoAcid: this._getAminoAcid(dnaMap[x] + dnaMap[y] + dnaMap[z])
    };
  }
  
  // Маппінг до Cymtor (Калабі-Яу)
  toCymtor() {
    const h11 = 1 + parseInt(this.k.slice(0, 3), 2);
    const h21 = 1 + parseInt(this.k.slice(3, 6), 2);
    return { h11, h21, complexity: h11 * h21 };
  }
  
  // Маппінг до Evotor
  toEvotor() {
    const axes = {
      '00': { label: 'Metaware/Noos/Ludens', archetype: 'AnimaAnima', scale: 'They' },
      '01': { label: 'Ego/Subject/Proto', archetype: 'AnimaAnimus', scale: 'You' },
      '10': { label: 'Instinct/Ego/Proto', archetype: 'AnimusAnima', scale: 'Me' },
      '11': { label: 'Aware/Subject/Sapiens', archetype: 'AnimusAnimus', scale: 'We' }
    };
    return {
      x: axes[this.k.slice(0, 2)],
      y: axes[this.k.slice(2, 4)],
      z: axes[this.k.slice(4, 6)],
      description: `${axes[this.k.slice(0, 2)].label} → ${axes[this.k.slice(2, 4)].label} → ${axes[this.k.slice(4, 6)].label}`
    };
  }
  
  _getAminoAcid(codon) {
    const geneticCode = {
      'AAA': 'Lys', 'CCC': 'Pro', 'GGG': 'Gly', 'UUU': 'Phe',
      'GAG': 'Glu', 'CAC': 'His', 'CCA': 'Pro', 'CUG': 'Leu'
      // ... full genetic code can be extended
    };
    return geneticCode[codon] || 'Unknown';
  }
}

module.exports = { StateK }; 