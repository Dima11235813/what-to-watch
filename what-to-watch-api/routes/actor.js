const Router = require("express-promise-router");
const db = require("../db");
let fetchActorSearchQuery = require("../services/actorSearchQuery.js");
let fetchActorData = require("../services/actorPageData.js");

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;
router.post("/data", async (req, res) => {
  let url = req.body.url;
  let data = await fetchActorData(url);
  res.send(data);
});
router.post("/search", async (req, res) => {
  let url = req.body.url;
  let data = await fetchActorSearchQuery(url);
  res.send(data);
});

// const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//   res.send(rows[0])
