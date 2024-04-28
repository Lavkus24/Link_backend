const express = require('express')
const app = express()
require('./Connections/mongodb')
const userRoutes = require('./Router/userRoutes')

const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use(userRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log('server created')
})


