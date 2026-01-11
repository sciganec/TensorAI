import StateK from '../core/StateK.js';

export class FinancialCoach {
  constructor(initialState = '101010') {
    this.currentState = new StateK(initialState);
    this.financialGoals = [];
    this.transactionHistory = [];
  }

  analyzeFinancialState() {
    const evotor = this.currentState.toEvotor();
    const charge = this.currentState.charge;

    const advice = {
      mindset: evotor.x.label.includes('Aware')
        ? 'Ваша усвідомленість дозволяє чітко бачити фінансові цілі. Скористайтесь цим.'
        : 'Розвивайте фінансову усвідомленість через освіту та самоаналіз.',
      social: evotor.y.label.includes('Subject')
        ? 'Ви дієте як суб\'єкт. Активно формуйте своє фінансове оточення.'
        : 'Ви надто залежите від соціального поля. Створіть власні правила гри.',
      action: evotor.z.label.includes('Sapiens')
        ? 'Використовуйте розумні інструменти: інвестиції, автоматизацію.'
        : 'Почніть з простих інструментів: бюджет, відстеження витрат.',
      energy: charge.total > 2
        ? 'Високий енергетичний потенціал. Ідеальний час для ризикованих інвестицій.'
        : 'Низька енергія. Зосередьтесь на збереженні та стабільності.'
    };

    return { currentState: this.currentState.k, hexagram: this._getHexagram(this.currentState.k), advice, recommendedTransitions: this._getFinancialTransitions() };
  }

  _getFinancialTransitions() {
    const transitions = {
      '000000': { target: '100010', operator: 'F(5)&F(1)', goal: 'Перший поштовх до активності' },
      '101010': { target: '111011', operator: 'F(0)', goal: 'Перехід від балансу до творчості' },
      '111001': { target: '111111', operator: 'F(1)&F(2)', goal: 'Повна фінансова інтеграція' }
    };
    return transitions[this.currentState.k] || { target: '111111', operator: 'F(0)&F(2)&F(4)', goal: 'Загальний шлях до процвітання' };
  }

  _getHexagram(k) {
    const hexagramMap = {
      '111111': { symbol: '䷀', name: 'Творчість', advice: 'Початок нового фінансового циклу' },
      '000000': { symbol: '䷁', name: 'Сприйнятливість', advice: 'Накопичуйте ресурси, готуйтесь' },
      '101010': { symbol: '䷫', name: 'Розрив', advice: 'Час прийняти рішучі фінансові рішення' }
    };
    return hexagramMap[k] || { symbol: '?', name: 'Невідомо', advice: 'Аналізуйте свою ситуацію' };
  }
}

export default FinancialCoach;
