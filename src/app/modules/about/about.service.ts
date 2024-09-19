import About, { TAbout } from "./about.model";

const addAboutMeIntoDB = async (data: TAbout) => {
  const result = await About.create(data);

  return result;
};

const getAboutMeFromDB = async () => {
  const result = await About.find();

  return result;
};

const updateAboutMeIntoDB = async (id: string, data: TAbout) => {
  const result = await About.findByIdAndUpdate(id, data);

  return result;
};

const AboutServices = {
  addAboutMeIntoDB,
  getAboutMeFromDB,
  updateAboutMeIntoDB,
};

export default AboutServices;
