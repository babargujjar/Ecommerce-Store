import mongoose from "mongoose";


var schema = new mongoose.Schema({
    customername: String,
    customeremail: String,
    customermsg: String
})


export default mongoose.models.contactinquiry || mongoose.model("contactinquiry",schema)


