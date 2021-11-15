const express = require('express')
const app = express();
const port = process.env.POER || 3000

app.get('/', (req, res) => {
  res.status(200).json({message : 'BTPNS SHIFTED 3 '})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})