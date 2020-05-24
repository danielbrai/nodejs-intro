const fs = require("fs");

const getAll = (filePath) => {
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];
};

const getById = (filePath, id) => {
  const db = getAll(filePath);
  return db.filter((user) => user.id == id)[0];
};

const saveDataInDB = (filePath, data) => {
  const db = getAll(filePath);
  const id = db[db.length - 1].id;
  data.id = id + 1;
  db.push(data);
  fs.writeFileSync(filePath, JSON.stringify(db, null, "\t"));
};

const update = (filePath, id, data) => {
  const userInDb = getById(filePath, id);

  if (userInDb) {
    copyObject(userInDb, data);
    const allUsersInDB = getAll(filePath);
    removeObjectFromArrayById(allUsersInDB, userInDb.id);
    allUsersInDB.push(userInDb);
    fs.writeFileSync(filePath, JSON.stringify(allUsersInDB, null, "\t"));
  }
};

module.exports = { getAll, saveDataInDB, getById, update };

const copyObject = (destination, source) => {
  for (let key in destination) {
    if (source[key] && destination[key] != source[key]) {
      destination[key] = source[key];
    }
  }
}

const removeObjectFromArrayById = (all, id) => {
  for (let a = 0; a < all.length; a++) {
    if (all[a].id === id) {
      all.splice(a, 1);
    }
  }
}



