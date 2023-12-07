const express = require('express');
const app = express();
const port = 3000;

const motivationalPhrases = [
  'Acredite em você mesmo e tudo será possível.',
  'O único modo de fazer um excelente trabalho é amar o que você faz.',
  'A persistência realiza o impossível.',
  'O sucesso é a soma de pequenos esforços repetidos diariamente.',
  'Você é capaz de mais do que imagina.',
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
  const randomPhrase = motivationalPhrases[randomIndex];
  res.json({ phrase: randomPhrase });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
