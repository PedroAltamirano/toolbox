const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000

app.use(cors());
app.use(express.json());

const reverseWords = str => {
  return str.split(" ")
    .map(word => {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
};

app.get('/api/iecho', (req, res) => {
  const query = req.query.text
  console.log(typeof query)
  if (!query || query === '' || typeof query !== 'string') res.json({ 'error': 'no text' })
  res.json({ 'text': reverseWords(query) })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
