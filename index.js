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
const {v4:uuid}= require('uuid')
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'views'))
let methodOverride= require('method-override')
app.use(methodOverride("_method"))

//----------------------------------
app.listen(3000,()=>{
console.log('started listening at port 3000')
//-----------------------------------------------
})
let Comments= [
{id:uuid(),
    username:'todd',
comment:'thats so funny'

},
{
    id:uuid(),
    username:'charlie',
comment:'x men was not that good'
},
{
    id:uuid(),
    username:'sarinder',
comment:'something must be changed'
},
{
    id:uuid(),
    username:'james',
comment:'i dont like this city'
}

]

//-----------------------------------------------
app.get('/comments',(req,res)=>
{

res.render('getcomments',{Comments});

} )

//-------------------------------------------
app.get('/comments/new',(req,res)=>{

res.render('newcomment');

})

//-----------------------------------------------

app.post('/comments',(req,res)=>
{

const {username , comment}= req.body
Comments.push({username,comment,id:uuid()})
res.redirect("/comments")


})
//----------------shows the specific comment-------------------------------
app.get("/comments/:id",(req,res)=>
{
const {id }= req.params;
  const comm=  Comments.find(c => c.id== (id))
 
  res.render('showcomment',{comm})


})

app.patch('/comments/:id',(req,res)=>
{
const {id }= req.params;
const comm= Comments.find(c=> c.id===id)
const newcomment= req.body.comment;
comm.comment= newcomment
res.redirect("/comments")

})
//-----------------------------------------------
app.get('/comments/:id/edit',(req,res)=>{
    const {id }= req.params;
    const comm= Comments.find(c=> c.id===id)
    res.render('editcomment',{comm})

})


app.delete('/comments/:id' ,(req ,res)=>{


const {id }= req.params;
console.log(id)
Comments = Comments.filter(c=> c.id !== id)
res.redirect('/comments')

})