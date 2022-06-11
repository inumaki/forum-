//  get/comments- list all comments
//  post/comments= Create a new comment
//  get/comments/:id= get one comment(using id)
//  patch/comments/:id = update one comment
//  delete/comments/:id = delete a comment;

const express= require('express');
const app= express();
const path =require('path');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.listen(3000,()=>{
console.log('started listening at port 3000')

})



app.get()