const app = require('./Middlewares/middlewares')
const dbConn=require('./db/dbConn')


dbConn()
app.listen(4000, () => {
    console.log('server running on 4000')
})
