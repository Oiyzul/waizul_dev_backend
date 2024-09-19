import catchAsync from "../../../utils/catchAsync";
import sendRes from "../../../utils/sendRes";
import AboutServices from "./about.service";

const addAboutMe = catchAsync(async (req, res) => {
  const result = await AboutServices.addAboutMeIntoDB(req.body);

  sendRes({
    res,
    success: true,
    statusCode: 201,
    message: "About me added successfully.",
    data: result,
  });
});

const getAboutMe = catchAsync(async (req, res) => {
  const result = await AboutServices.getAboutMeFromDB();

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "About me retrieved successfully.",
    data: result,
  });
});

const updateAboutMe = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AboutServices.updateAboutMeIntoDB(id, req.body);

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "About me updated successfully.",
    data: result,
  });
});

const AboutControllers = {
  addAboutMe,
  getAboutMe,
  updateAboutMe
};

export default AboutControllers;
