let express =require('express');

let app= express();
app.get("/",(req,res)=>{
    res.send('<h2 style="margin:20px auto 0px auto;">Application under Maintenance</h2> <p>This application is currently undergoing scheduled maintenance. We should be back Shortly.</p>')
})
app.listen(5000,()=>{
    console.log("express started")
})