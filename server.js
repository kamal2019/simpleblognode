const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine','ejs')

app.use('/articles',articleRouter)

app.get('/', (req,res) => {
    const articles = [{
        title:'test article 1',
        createdAt :new Date(),
        description :"Test description 1"
    },
    {
        title:'test article 2',
        createdAt :new Date(),
        description :"Test description 2"
    }
]
    res.render('index',{articles:articles})
})

app.listen(3000)