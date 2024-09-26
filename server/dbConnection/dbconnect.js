import mongoose from "mongoose";

const DBURL =
  "mongodb+srv://agarg1219:O0TIJZgSOKJcT0dc@cluster0.1330g.mongodb.net/Book_Store";
const dbConnect = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("mongoDb Connect Successfully");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
