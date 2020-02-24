const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'http://placeimg.com/128/128/1',
            'name':'박우림',
            'birthday':'960906',
            'gender':'남자',
            'job':'대학생'
        },{
            'id': 2,
            'image': 'http://placeimg.com/128/128/2',
            'name':'라이언구하기',
            'birthday':'960906',
            'gender':'남자',
            'job':'대학생'
        },{
            'id': 3,
            'image': 'http://placeimg.com/128/128/3',
            'name':'박주영',
            'birthday':'010615',
            'gender':'여자',
            'job':'대학생'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`))