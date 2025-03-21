import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(bodyParser.text({ type: '*/*' }))
app.use(express.static('public'))

app.get('/api/legado', require('./api/legado'))
app.post('/api/ra', require('./api/ra'))

app.get('/api/reader', require('./api/reader'))
app.get('/api/ireadnote', require('./api/ireadnote'))
app.get('/api/source_reader', require('./api/source_reader'))
app.get('/api/interface', require('./api/interface'))

app.listen(port, () => {
  console.info(`应用正在监听 ${port} 端口`)
})
