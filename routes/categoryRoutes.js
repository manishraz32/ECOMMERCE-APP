import express from 'express';
import {
    categoryController,
    createCategoryController,
    deleteCategoryController,
    singleCategoryController,
    updateCategoryController
} from '../controllers/categoryController.js';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Category
router.post(
    '/create-category',
    requireSignin,
    isAdmin,
    createCategoryController
);

//update Category
router.put(
    '/update-category/:id',
    requireSignin,
    isAdmin,
    updateCategoryController
);


//getAll category
router.get('/get-category', categoryController);


//single  category
router.get('/single-category/:slug', singleCategoryController);

//delete category
router.delete('/delete-category/:id', requireSignin, isAdmin, deleteCategoryController);


export default router;