const router=require("express").Router();
const e = require("express");
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

//GET Request
router.get("/getBooks",async (req, res)=>{
    let books;
    try {
       books= await booksModel.find();
       res.status(200).json({books});
    } catch (error) {
        console.log(error)
    }
})

//GET request by ID
router.get("/getBooks/:id",async (req, res)=>{
    let book;

    try {
        book=await booksModel.findById(req.params.id);
        res.status(200).json({ book});
    } catch (error) {
        console.log(error)
    }
})

//update books by id
router.put("/updateBooks/:id",async (req, res)=>{
    const id=req.params.id;
    let book;
    const {bookName,description,image,author,price}=req.body;
    try {
        book=await booksModel.findByIdAndUpdate(id,{bookName,description,image,author,price});
        await book.save().then(()=>{res.status(200).json({message:"Data Updated Successfully"})})
    } catch (error) {
        console.log(error)
    }
})

//Delete Book By Id
router.delete("/deleteBook/:id",async(req,res)=>{
    try {
        await booksModel.findByIdAndDelete(req.params.id).then(()=>{res.status(201).json({message:"Book deleted"})})
    } catch (error) {
        console.log(error)
    }
})


module.exports =router;