import Introduction, { TIntroduction } from "./introduction.model";

const addIntroductionIntoDB = async (data: TIntroduction) => {
  const result = await Introduction.create(data);

  return result;
};

const getIntroductionFromDB = async () => {
  const result = await Introduction.find();

  return result;
};

const updateIntroductionIntoDB = async (id: string, data: TIntroduction) => {
  const result = await Introduction.findByIdAndUpdate(id, data);

  return result;
};

const IntroductionServices = {
  addIntroductionIntoDB,
  getIntroductionFromDB,
 updateIntroductionIntoDB,
};

export default IntroductionServices;
