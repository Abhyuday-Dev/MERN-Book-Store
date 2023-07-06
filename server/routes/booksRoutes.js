const router=require("express").Router();
const booksModel = require("../Models/booksModel")


router.post("/add",async(req,res)=>{
    try {
        const data=req.body;
        const newBook=new booksModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"Book added successfully"})
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports =router;