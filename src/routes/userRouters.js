import express from 'express';
import {
    createUsers,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';
const router = express.Router();
router.post('/create', createUsers);
router.get('/all', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;  
