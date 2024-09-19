import Project, { TProject } from "./project.model";

const addProjectIntoDB = async (data: TProject) => {
  const result = await Project.create(data);

  return result;
};

const getProjectsFromDB = async () => {
  const result = await Project.find();

  return result;
};

const updateProjectIntoDB = async (id: string, data: TProject) => {
  const result = await Project.findByIdAndUpdate(id, data);

  return result;
};

const ProjectServices = {
  addProjectIntoDB,
  getProjectsFromDB,
  updateProjectIntoDB,
};

export default ProjectServices;
