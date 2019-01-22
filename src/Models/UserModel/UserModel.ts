import * as express from "express";
import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
  FirstName: {
    type: String,
    default: "hello world"
  },
  LastName: {
    type: String,
    default: "hello again"
  }
});
export default model("user", userSchema);
