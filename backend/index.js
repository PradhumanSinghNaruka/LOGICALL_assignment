import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI; 

// connect to mongoDB
const startServer = async () => {
try {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000 
    });
    console.log("Connected to mongoDB");


// defining routes
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
} catch (error) {
    console.log('Error: ', error);
}
};

startServer();