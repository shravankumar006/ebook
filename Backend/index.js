import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();
app.use(cors({
  origin: 'https://ansh06.netlify.app'
}));
app.use(express.json());


const PORT = process.env.PORT || 8080;
 const URI = process.env.MONGODBANSH;

// // connect to mongoDB
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
//}



// Or:
try {
  await mongoose.connect('mongodb+srv://shravan1458119:14581119ansh@ansh.c5gxcok.mongodb.net/?retryWrites=true&w=majority&appName=ANSH');
  console.log("MOngoDB connected");
} catch (error) {
  handleError(error);
}

//run().catch(console.dir);

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});