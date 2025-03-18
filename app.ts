import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(bodyParser.text({ type: '*/*' }))
app.use(express.static('public'))

app.post('/api/ra', require('./api/ra'))
app.get('/api/legado', require('./api/legado'))
app.get('/api/aiyue', require('./api/aiyue'))
app.get('/api/ireadnote', require('./api/ireadnote'))
app.get('/api/synthesis', require('./api/synthesis'))
app.listen(port, () => {
  console.info(`应用正在监听 ${port} 端口`)
})
