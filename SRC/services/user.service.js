import User from "../Database/user.schema.js";
import { ErrorWithStatus } from "../exceptions/exception.js";

export const getAllUsers = async (page = 1, limit = 10, query = null) => {
  try {
    // page 1, limit 10, total 100
    const skip = (page - 1) * limit;
    // page 1 == skip 0,

    const filter = query ? { name: { $regex: query, $options: "i" } } : {};
    const users = await User.find(filter, {
      password: 0,
    })
      .skip(skip)
      .limit(limit);
    const total = await User.countDocuments(filter);
    return { data: users, meta: { page, limit, total } };
  } catch (error) {
    console.log(error);
    throw new ErrorWithStatus(error.message, 500);
  }
};
