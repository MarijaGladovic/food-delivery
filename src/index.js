import "dotenv/config";
import { connect } from "mongoose";
import app from "./app";

const { PORT, DBLINK } = process.env;

connect(DBLINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("APP STARTED");
    });
  })
  .catch((error) => {
    console.log("An error has occured while connection to DB in seed mode.");
    console.log("ERROR => ", error);
  });
