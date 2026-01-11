import FinancialCoach from './apps/FinancialCoach.js';

export function main() {
  const coach = new FinancialCoach('101010');
  const analysis = coach.analyzeFinancialState();
  console.log('Quadrotor Success Simulator — demo output:\n');
  console.log(JSON.stringify(analysis, null, 2));
  return analysis;
}

if (process.env.NODE_ENV !== 'test') main();
