import { Schema, model } from "mongoose";

const aboutSchema = new Schema<TAbout>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  quote: { type: String },
});

const About = model("About", aboutSchema);

export default About;

export type TAbout = {
  title: string;
  description: string;
  quote: string;
};
