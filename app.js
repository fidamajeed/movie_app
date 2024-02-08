const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const movieRoute=require("./controller/MovieRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fidamajeed:fida3015@cluster0.4jvsmni.mongodb.net/movieDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/movie",movieRoute)

app.listen(3006,()=>{
    console.log("server running")
})