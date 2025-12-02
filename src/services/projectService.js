import Project from '../models/projectModel.js';

export const createProject = async (data)=>{
    return await Project.create(data);
}

export const getALLProject = async ()=>{
    return await Project.find().populate('owner', 'name email');
}

export const getProjectById = async (id)=>{
    return await Project.findById(id).populate('owner', 'name email');
}

export const updateProject = async (id, data)=>{
    return await Project.findByIdAndUpdate(id, data, {new: true});
}

export const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};