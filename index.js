const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 27015)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/:id', (req, res) =>
{
    const id = req.params.id
    const json = require('./musseum.json')

    res.json(json.musseum[id])
})

app.listen(app.get('port'), () => console.log(app.get('port')))