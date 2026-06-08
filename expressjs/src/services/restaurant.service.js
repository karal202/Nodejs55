import Users from "../models/User.js";
import restaurant from "../models/restaurant.js";
import like_res from "../models/LikeRes.js";
import rate_res from "../models/RateRes.js";
import food from "../models/food.js";
import orders from "../models/Order.js";
import { BadRequestError, NotFoundError } from "../common/helpers/exception.helper.js";


like_res.belongsTo(Users, { foreignKey: "user_id" });
like_res.belongsTo(restaurant, { foreignKey: "res_id" });
rate_res.belongsTo(Users, { foreignKey: "user_id" });
rate_res.belongsTo(restaurant, { foreignKey: "res_id" });

class RestaurantService {

  async toggleLike({ userId, resId }) {
    if (!userId || !resId) {
      throw new BadRequestError("userId and resId are required");
    }

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    const existingLike = await like_res.findOne({
      where: { user_id: userId, res_id: resId },
    });

    if (existingLike) {
      await existingLike.destroy();
      return { liked: false, message: "Unliked restaurant successfully" };
    } else {
      await like_res.create({
        user_id: userId,
        res_id: resId,
        date_like: new Date(),
      });
      return { liked: true, message: "Liked restaurant successfully" };
    }
  }

  async likeRestaurant({ userId, resId }) {
    if (!userId || !resId) {
      throw new BadRequestError("userId and resId are required");
    }

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    const existingLike = await like_res.findOne({
      where: { user_id: userId, res_id: resId },
    });

    if (existingLike) {
      throw new BadRequestError("Restaurant already liked");
    }

    const newLike = await like_res.create({
      user_id: userId,
      res_id: resId,
      date_like: new Date(),
    });
    return newLike;
  }

  async unlikeRestaurant({ userId, resId }) {
    if (!userId || !resId) {
      throw new BadRequestError("userId and resId are required");
    }

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    const existingLike = await like_res.findOne({
      where: { user_id: userId, res_id: resId },
    });

    if (!existingLike) {
      throw new BadRequestError("Restaurant has not been liked yet");
    }

    await existingLike.destroy();
    return { message: "Unliked restaurant successfully" };
  }

  async getLikesByRestaurant(resId) {
    if (!resId) throw new BadRequestError("resId is required");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    return await like_res.findAll({
      where: { res_id: resId },
      include: [{
        model: Users,
        attributes: ["full_name", "email"],
      }],
    });
  }

  async getLikesByUser(userId) {
    if (!userId) throw new BadRequestError("userId is required");

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    return await like_res.findAll({
      where: { user_id: userId },
      include: [{
        model: restaurant,
        attributes: ["res_name", "image", "description"],
      }],
    });
  }

  async rateRestaurant({ userId, resId, amount }) {
    if (!userId || !resId || amount === undefined) {
      throw new BadRequestError("userId, resId, and amount are required");
    }

    const parsedAmount = parseInt(amount);
    if (isNaN(parsedAmount) || parsedAmount < 1 || parsedAmount > 5) {
      throw new BadRequestError("Rating amount must be an integer between 1 and 5");
    }

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    const existingRate = await rate_res.findOne({
      where: { user_id: userId, res_id: resId },
    });

    if (existingRate) {
      await existingRate.update({ amount: parsedAmount, date_rate: new Date() });
      return { message: "Rating updated successfully" };
    } else {
      await rate_res.create({
        user_id: userId,
        res_id: resId,
        amount: parsedAmount,
        date_rate: new Date(),
      });
      return { message: "Rating added successfully" };
    }
  }

  async getRatingsByRestaurant(resId) {
    if (!resId) throw new BadRequestError("resId is required");

    const resExists = await restaurant.findByPk(resId);
    if (!resExists) throw new NotFoundError("Restaurant not found");

    return await rate_res.findAll({
      where: { res_id: resId },
      include: [{
        model: Users,
        attributes: ["full_name", "email"],
      }],
    });
  }

  async getRatingsByUser(userId) {
    if (!userId) throw new BadRequestError("userId is required");

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    return await rate_res.findAll({
      where: { user_id: userId },
      include: [{
        model: restaurant,
        attributes: ["res_name", "image", "description"],
      }],
    });
  }

  async createOrder({ userId, foodId, amount, code, arrSubId }) {
    if (!userId || !foodId || !amount || !code) {
      throw new BadRequestError("userId, foodId, amount, and code are required");
    }

    const parsedAmount = parseInt(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      throw new BadRequestError("Order amount must be a positive integer");
    }

    const userExists = await Users.findByPk(userId);
    if (!userExists) throw new NotFoundError("User not found");

    const foodExists = await food.findByPk(foodId);
    if (!foodExists) throw new NotFoundError("Food not found");

    return await orders.create({
      user_id: userId,
      food_id: foodId,
      amount: parsedAmount,
      code,
      arr_sub_id: arrSubId || null,
    });
  }
}

export default new RestaurantService();