const {
  getAll,
  getById,
  saveDataInDB,
  update
} = require("../dataprovider/dbDataProvider");

const filePath = __dirname + "/users.json";

const userRouter = {
  saveUser: (req, res) => {
    saveDataInDB(filePath, req.body);
    res.status(201).send("Ok");
  },

  getAll: (req, res) => {
    const data = getAll(filePath);
    res.status(200).send(data);
  },

  getById: (req, res) => {
    const data = getById(filePath, req.params.id);
    res.status(200).send(data);
  },

  updateUser: (req, res) => {
    update(filePath, req.params.id, req.body);
    res.status(204).send('No Content');
  }
};

module.exports = userRouter;
