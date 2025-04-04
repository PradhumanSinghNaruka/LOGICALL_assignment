import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {  
        type: String,
        required: true,
        unique: true
    }
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;