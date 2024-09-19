import { Schema, model } from "mongoose";

const projectSchema = new Schema<TProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  stacks: { type: [String], required: true },
  features: { type: [String], required: true },
  images: {
    homepage: { type: String, required: true },
    dashboard: { type: String, required: true },
    singlePages: { type: [String], required: true },
  },
  demo_url: { type: String, required: true },
  github_url: { type: String, required: true },
  video_url: { type: String },
});

const Project = model("Project", projectSchema);

export default Project;

export type TProject = {
  name: string;
  description: string;
  stacks: string[];
  features: string[];
  images: TImages;
  demo_url: string;
  github_url: string;
  video_url?: string;
};

export type TImages = {
  homePage: string;
  dashboard: string;
  singlePages: string[];
};
