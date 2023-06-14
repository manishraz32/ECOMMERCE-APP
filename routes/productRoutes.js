import express from 'express';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import { 
    brainTreePaymentController,
    brainTreeTokenController,
    createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController, 
    prodctCategoryController, 
    productCountController, 
    productFiltersController, 
    productListController, 
    productPhotoController, 
    relatedProductController, 
    searchProductController, 
    updateProductController
} from '../controllers/productController.js';
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
    '/create-product', 
    requireSignin, 
    isAdmin, 
    formidable(), 
    createProductController
);

//get product
router.get('/get-product', getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController)

// delete product
router.delete('/delete-product/:pid', deleteProductController );

//update product
router.put(
    '/update-product/:pid',
    requireSignin,
    isAdmin,
    formidable(),
    updateProductController
);

//filter Product
router.post('/product-filters', productFiltersController);


//product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

//Search Product
router.get('/search/:keywords', searchProductController);

//similar product
router.get('/related-product/:pid/:cid', relatedProductController);

//category wise product
router.get('/product-category/:slug', prodctCategoryController);

//payments routes

//token
router.get('/braintree/token', brainTreeTokenController);

//payments
router.post('/braintree/payment', requireSignin, brainTreePaymentController)



export default router;