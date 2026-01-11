const { FinancialCoach } = require('./apps/FinancialCoach');

function main() {
  const coach = new FinancialCoach('101010');
  const analysis = coach.analyzeFinancialState();
  console.log('Quadrotor Success Simulator — demo output:\n');
  console.log(JSON.stringify(analysis, null, 2));
}

if (require.main === module) main();

module.exports = { main };
