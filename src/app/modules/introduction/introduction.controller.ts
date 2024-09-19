import catchAsync from "../../../utils/catchAsync";
import sendRes from "../../../utils/sendRes";
import IntroductionServices from "./introduction.service";

const addIntroduction = catchAsync(async (req, res) => {
  const result = await IntroductionServices.addIntroductionIntoDB(req.body);

  sendRes({
    res,
    success: true,
    statusCode: 201,
    message: "Introduction added successfully.",
    data: result,
  });
});

const getIntroduction = catchAsync(async (req, res) => {
  const result = await IntroductionServices.getIntroductionFromDB();

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "Introduction retrieved successfully.",
    data: result,
  });
});

const updateIntroduction = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await IntroductionServices.updateIntroductionIntoDB(
    id,
    req.body
  );

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "Introduction updated successfully.",
    data: result,
  });
});

const IntroductionControllers = {
  addIntroduction,
  getIntroduction,
  updateIntroduction,
};

export default IntroductionControllers;
