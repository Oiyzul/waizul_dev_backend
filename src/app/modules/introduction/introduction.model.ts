import { Schema, model } from "mongoose";

const introductionSchema = new Schema<TIntroduction>({
    welcome: { type: String, required: true },
    name: { type: String, required: true },
    job_title_1: { type: String, required: true },
    job_title_2: { type: String, required: true },
    job_title_3: { type: String, required: true },
  });
  
  const Introduction = model("Introduction", introductionSchema);
  
  export default Introduction;
  
  export type TIntroduction = {
    welcome: string;
    name: string;
    job_title_1: string;
    job_title_2: string;
    job_title_3: string;
  };
  