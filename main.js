'use strict'

//const {db} = require('./server/db')
const app = require('./server')
const PORT = 1339

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log('db synced')s
//     app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
//   })

app.listen(PORT, () => console.log(`second time's a charm, now listening on port ${PORT}`))