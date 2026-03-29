const cypress = require('cypress');

cypress
  .run({
    headless: true,
    browser: 'electron',
    spec: 'cypress/e2e/**/*.cy.js',
  })
  .then((results) => {
    console.log(results);
    process.exit(results.totalFailures === 0 ? 0 : 1);
  })
  .catch((err) => {
    console.error('Erro ao executar testes:', err);
    process.exit(1);
  });
