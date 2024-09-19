import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000");
    });
  } catch (err) {
    console.log(err);
  }
}

main()