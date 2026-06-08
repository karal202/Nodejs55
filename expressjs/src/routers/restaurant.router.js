import express from "express";
import restaurantController from "../controllers/restaurant.controller.js";

const restaurantRouter = express.Router();

// tạo like
restaurantRouter.post("/like/toggle", restaurantController.toggleLike);

// thêm like (nếu chưa like)
restaurantRouter.post("/like", restaurantController.likeRestaurant);

// thêm unlike
restaurantRouter.post("/unlike", restaurantController.unlikeRestaurant);

// lấy like theo nhà hàng
restaurantRouter.get("/like/restaurant/:resId", restaurantController.getLikesByRestaurant);

// lấy like theo user
restaurantRouter.get("/like/user/:userId", restaurantController.getLikesByUser);

// tạo rate
restaurantRouter.post("/rate", restaurantController.rateRestaurant);

// lấy rate theo nhà hàng
restaurantRouter.get("/rate/restaurant/:resId", restaurantController.getRatingsByRestaurant);

// lấy rate theo user
restaurantRouter.get("/rate/user/:userId", restaurantController.getRatingsByUser);

// tạo order
restaurantRouter.post("/order", restaurantController.createOrder);

export default restaurantRouter;
