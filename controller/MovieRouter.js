const express=require("express")
const MovieRouter=require("../model/movieModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let mov=new MovieRouter(data)
    let rst=await mov.save()
    res.json(
        {
            status:"success"
        }
    )
})
module.exports=router