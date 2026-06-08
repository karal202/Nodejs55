import restaurantService from "../services/restaurant.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

class RestaurantController {
  // 1. Toggle like restaurant
  toggleLike = async (req, res, next) => {
    try {
      const { userId, resId } = req.body;
      const result = await restaurantService.toggleLike({ userId, resId });
      res.status(200).json(responseSuccess(result, result.message));
    } catch (error) {
      next(error);
    }
  };

  // 1.1 Like restaurant
  likeRestaurant = async (req, res, next) => {
    try {
      const { userId, resId } = req.body;
      const result = await restaurantService.likeRestaurant({ userId, resId });
      res.status(200).json(responseSuccess(result, "Liked restaurant successfully"));
    } catch (error) {
      next(error);
    }
  };

  // 1.2 Unlike restaurant
  unlikeRestaurant = async (req, res, next) => {
    try {
      const { userId, resId } = req.body;
      const result = await restaurantService.unlikeRestaurant({ userId, resId });
      res.status(200).json(responseSuccess(result, result.message));
    } catch (error) {
      next(error);
    }
  };

  // 2. Get list of likes by restaurant
  getLikesByRestaurant = async (req, res, next) => {
    try {
      const { resId } = req.params;
      const likes = await restaurantService.getLikesByRestaurant(resId);
      res.status(200).json(responseSuccess(likes, "Get restaurant like list successfully"));
    } catch (error) {
      next(error);
    }
  };

  // 3. Get list of likes by user
  getLikesByUser = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userLikes = await restaurantService.getLikesByUser(userId);
      res.status(200).json(responseSuccess(userLikes, "Get user like list successfully"));
    } catch (error) {
      next(error);
    }
  };

  // 4. Rate restaurant
  rateRestaurant = async (req, res, next) => {
    try {
      const { userId, resId, amount } = req.body;
      const result = await restaurantService.rateRestaurant({ userId, resId, amount });
      res.status(200).json(responseSuccess(result, result.message));
    } catch (error) {
      next(error);
    }
  };

  // 5. Get ratings by restaurant
  getRatingsByRestaurant = async (req, res, next) => {
    try {
      const { resId } = req.params;
      const ratings = await restaurantService.getRatingsByRestaurant(resId);
      res.status(200).json(responseSuccess(ratings, "Get restaurant ratings successfully"));
    } catch (error) {
      next(error);
    }
  };

  // 6. Get ratings by user
  getRatingsByUser = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userRatings = await restaurantService.getRatingsByUser(userId);
      res.status(200).json(responseSuccess(userRatings, "Get user ratings successfully"));
    } catch (error) {
      next(error);
    }
  };

  // 7. Create order
  createOrder = async (req, res, next) => {
    try {
      const { userId, foodId, amount, code, arrSubId } = req.body;
      const newOrder = await restaurantService.createOrder({
        userId,
        foodId,
        amount,
        code,
        arrSubId,
      });
      res.status(201).json(responseSuccess(newOrder, "Order created successfully", 201));
    } catch (error) {
      next(error);
    }
  };
}

export default new RestaurantController();
