import express from "express"
import authMiddleware from './../middleware/auth.js';
import { placeOrder, verifyPayment, userOrders, listOrders, updateStatus, cancelOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyPayment);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus);
orderRouter.post('/cancel', authMiddleware, cancelOrder); // New cancel route

export default orderRouter;