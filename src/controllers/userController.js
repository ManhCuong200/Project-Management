import * as userService from "../services/userService.js";
import { successResponse, errorResponse } from "../utils/respone.js";

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, "User created successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, "Users fetched successfully", users);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    successResponse(res, "User fetched successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    successResponse(res, "User updated successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    successResponse(res, "User deleted successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
