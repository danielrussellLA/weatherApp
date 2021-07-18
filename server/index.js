import express from 'express'
import morgan from 'morgan'
import React from 'react'

const PORT = 3000

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send(`hello`)
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})
