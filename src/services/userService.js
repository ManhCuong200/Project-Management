import userModel from "../models/userModel.js";

export const createUser = async (data) => {
  return await userModel.create(data);
};

export const getAllUsers = async () => {
  return await userModel.find();
};

export const getUserById = async (id) => {
  return await userModel.findById(id);
};

export const updateUser = async (id, data) => {
  return await userModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
