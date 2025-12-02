import * as projectService from '../services/projectService.js';
import {successResponse, errorResponse} from '../utils/respone.js';

export const createProject = async (req, res)=>{
    try {
        const project = await projectService.createProject(req.body);
        successResponse(res, 'Project created successfully', project);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

export const getALL =  async (req, res)=>{
    try {
        const projects = await projectService.getALLProject();
        successResponse(res, 'Projects fetched successfully', projects);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

export const getProjectById = async (req, res)=>{
    try {
        const project = await projectService.getProjectById(req.params.id);
        successResponse(res, 'Project fetched successfully', project);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

export const updateProject = async (req, res)=>{
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        successResponse(res, 'Project updated successfully', project);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

export const deleteProject = async (req, res)=>{
    try {
        const project = await projectService.deleteProject(req.params.id);
        successResponse(res, 'Project deleted successfully', project);
    } catch (error) {
        errorResponse(res, error.message);
    }
}
