const express=require('express');
const app = express();
app.get('/', (req,res)=>{   
    res.send("Welcome to the homepage....tqla");

});
const port = process.env.port || 3000;
app.listen(3000, () =>{
    console.log("JSR....Whatzzappppp");
});