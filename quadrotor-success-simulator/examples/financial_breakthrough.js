const { StateK } = require('../src/core/StateK');
const { QuadrotorOperators } = require('../src/core/Operators');
const { FinancialCoach } = require('../src/apps/FinancialCoach');

// 1. Створюємо фінансового коуча
const coach = new FinancialCoach('101010'); // Починаємо зі стану балансу

// 2. Аналізуємо поточний стан
console.log('=== ФІНАНСОВИЙ АНАЛІЗ ===');
const analysis = coach.analyzeFinancialState();
console.log(`Поточний стан: ${analysis.currentState} ${analysis.hexagram.symbol}`);
console.log(`Гексаграма: ${analysis.hexagram.name}`);
console.log(`Порада: ${analysis.hexagram.advice}`);

// 3. Отримуємо рекомендації
console.log('\n=== РЕКОМЕНДАЦІЇ ===');
Object.entries(analysis.advice).forEach(([area, text]) => {
  console.log(`${area.toUpperCase()}: ${text}`);
});
