// ./routes/index.js
const actors = require("./actor");
module.exports = app => {
  app.use("/api/actor", actors);
};
