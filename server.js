const path = require('path')
const fs = require('fs')
const koa = require('koa')
const app = new koa()
const router = require('koa-router')()
const static = require('koa-static') 
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const paths = './'
 
app.use(bodyParser())
// 使用静态资源
app.use(static(
  path.join( __dirname,  paths)
))
 


app.use(cors({
    origin: function (ctx) {
        return '*' 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
 
router.post('/cors1', async ctx=> {
	// console.log(ctx.request.body, 'body')
  ctx.response.type = 'json'
  ctx.response.body = await fs.createReadStream('./data.json')
})

router.get('/cors2', async ctx=> {
	// console.log(ctx.request.query, 'query')
	let {name, age} = ctx.request.query
	console.log(name, age)
  ctx.response.type = 'json'
  ctx.response.body = await fs.createReadStream('./data.json')
})

router.get('/ceshi', async ctx=>{
	console.log(ctx.request.query)
	ctx.response.type = 'json'
  ctx.response.body = await fs.createReadStream('./data.json')
})
 
app
    .use(router.routes())
    .use(router.allowedMethods())
 
app.listen(3000, function(){
	console.log(`server runing`)
})
