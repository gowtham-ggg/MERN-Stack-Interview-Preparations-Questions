import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required: true},
    mobile : {type : Number , required: true}
})

const userData =  mongoose.models.userData  || mongoose.model("userData",userSchema)

export default userData