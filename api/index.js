const express = require('express')
const cors = require('cors')
require('dotenv').config()

const HOSTNAME = 'localhost';
const PORT = 4001;

const app = express()


// Routes
// app.use('/api/mal', require('./routes/mal')) // not required here
app.use('/api/test', require('./routes/test'))

// 404
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Wrong use of the API :)'
    })
})

//enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))