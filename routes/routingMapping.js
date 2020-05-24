const userRoutes = require("../routes/userRoute");

module.exports = routers = {
  user: [
    {
      endpoint: "/users",
      verb: "get",
      method: userRoutes.getAll,
    },
    {
      endpoint: "/users/:id",
      verb: "get",
      method: userRoutes.getById,
    },
    {
      endpoint: "/users",
      verb: "post",
      method: userRoutes.saveUser,
    }, {
      endpoint: "/users/:id",
      verb: "patch",
      method: userRoutes.updateUser,
    },
  ],
};
