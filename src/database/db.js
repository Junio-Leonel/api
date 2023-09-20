import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.8cx3wni.mongodb.net/?retryWrites=true&w=majority`
  );
}

export default connectDatabase;
