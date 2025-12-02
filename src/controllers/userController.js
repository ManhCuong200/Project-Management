import * as userService from "../services/userService.js";
import { successResponse, errorResponse } from "../utils/respone.js";

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user) {
      return errorResponse(res, "User not created");
    }
    successResponse(res, "User created successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      return errorResponse(res, "Users not found");
    }
    successResponse(res, "Users fetched successfully", users);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return errorResponse(res, "User not found");
    }
    successResponse(res, "User fetched successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return errorResponse(res, "User not updated");
    }
    successResponse(res, "User updated successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      return errorResponse(res, "User not deleted");
    }
    successResponse(res, "User deleted successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
