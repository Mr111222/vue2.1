// 测试页面在routers路由页面下
const path = require('path')
const fs = require('fs')
const koa = require('koa')
const app = new koa()
const router = require('koa-router')()
const static = require('koa-static') 
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const paths = './'



// upfile
const koaBody = require('koa-body');
app.use(koaBody({
  multipart: true, // 支持文件上传
  formidable: {
    maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}));
// upfile
 
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


const uploadUrl = "http://localhost:3000/static/upload";
// 上传文件
router.post('/upload', (ctx) => {
  // 获取上传文件
  const file = ctx.request.files.file;
  console.log(file);
  // 读取文件流
  const fileReader = fs.createReadStream(file.path);
  console.log(fileReader);
  // 设置文件保存路径
  const filePath = path.join(__dirname, '/static/upload/');
  // 组装成绝对路径
  const fileResource = filePath + `/${file.name}`;
 
  /**
   * 使用 createWriteStream 写入数据，然后使用管道流pipe拼接
   */
  const writeStream = fs.createWriteStream(fileResource);
  // 判断 /static/upload 文件夹是否存在，如果不在的话就创建一个
  if (!fs.existsSync(filePath)) {
    fs.mkdir(filePath, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        fileReader.pipe(writeStream);
        ctx.body = {
          url: uploadUrl + `/${file.name}`,
          code: 0,
          message: '上传成功'
        };
      }
    });
  } else {
    fileReader.pipe(writeStream);
    ctx.body = {
      url: uploadUrl + `/${file.name}`,
      code: 0,
      message: '上传成功'
    };
  }
});


 
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


