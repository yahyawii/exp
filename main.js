const express = require ('express')
const { dirname } = require('path')
const app=express()
const port =5000

const worktime=(req,res,next)=>{
    var a = new Date()
        var day=a.getDay()
        var Hours =a.getHours()
if  (day==6 || day==0 || Hours>17 || Hours<9)  {
    return (
        res.sendfile(__dirname+'/error.html')
    )
   
     }
    next ()  }
app.use(worktime)

app.get('/',(req,res)=>{
    res.sendfile(__dirname+'/Home.html' )
})

 app.get('/services',(req,res)=>{
    res.sendfile(__dirname+'/Services.html')
 })
app.get('/contact',(req,res)=>{
     res.sendfile(__dirname+'/Contact.html' )
 })
app.listen(port,console.log(`server is running on the port ${port}`))
