const mongoose=require("mongoose")
const movieschema=mongoose.Schema(
    {

        name:String,
        lead:String,
        director:String,
        release:String

    }
)
module.exports=mongoose.model("movie_app",movieschema)