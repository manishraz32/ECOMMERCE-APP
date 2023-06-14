import express from 'express'
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} from '../controllers/authController.js'
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js'
//route object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);

//Forgot Password || POST
router.post('/forgot-password', forgotPasswordController);

// test 
router.get('/test', requireSignin, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requireSignin, (req, res) => {
    res.status(200).send({ ok: true });
})

//protected Admin route auth
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})

//update profile
router.put("/profile", requireSignin, updateProfileController);

//orders
router.get('/orders', requireSignin, getOrdersController);

//all orders
router.get('/all-orders', requireSignin, isAdmin, getAllOrdersController)

//order status update
router.put(
    "/order-status/:orderId",
    requireSignin,
    isAdmin,
    orderStatusController
);

export default router;
