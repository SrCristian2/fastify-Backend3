import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const uri =
  "mongodb+srv://Cristian:515837020l@cluster0.ywnwo5p.mongodb.net/fastifybk3";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("base de datos conectada", db.connection.name);
  } catch (error) {
    console.log("error al conectar a la base de datos", error.message);
  }
};
