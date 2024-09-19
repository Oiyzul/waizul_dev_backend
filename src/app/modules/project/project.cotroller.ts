import catchAsync from "../../../utils/catchAsync";
import sendRes from "../../../utils/sendRes";
import ProjectServices from "./project.service";


const addProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.addProjectIntoDB(req.body);

  sendRes({
    res,
    success: true,
    statusCode: 201,
    message: "Project added successfully.",
    data: result,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjectsFromDB();

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "Projects retrieved successfully.",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProjectServices.updateProjectIntoDB(id, req.body);

  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "Project updated successfully.",
    data: result,
  });
});

const ProjectControllers = {
  addProject,
  getProjects,
  updateProject
};

export default ProjectControllers;
