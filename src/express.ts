import express,{Request,Response} from "express";

const app = express();
const port:number=5000;


app.get('/',(req:Request,res:Response)=>{
    res.send('Response');
})
app.listen(port,():void=>{
    console.log('localhost:',port);
})