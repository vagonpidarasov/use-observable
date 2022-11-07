const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors());

function getDelay(delay) {
  if (delay === 'random') {
    return Math.floor(Math.random()*1000);
  }
  if(!isNaN(Number(delay))) {
    return Number(delay);
  }
  return 0;
}

app.get('/rand', (request, response) => {
  setTimeout(() => response.json({value: Math.floor(Math.random()*100)}), getDelay(request.query.delay));

});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
