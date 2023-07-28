const express  = require('express');
const routes = require('./src/routes');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/recognize',routes);

app.get('/',(req,res)=>{
    res.send('hello world');
})

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Berjalan pada port ${PORT}`)
})