const request = require("request");
var actorSearchQueryServiceHandler = require("./serviceHandlers/ActorSearchQueryServiceHandler");

function fetchActorSearchQuery(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        actorSearchQueryServiceHandler.setupHandler(body, resolve);
      } else {
        reject(err);
      }
    });
  });
}

return module.exports = fetchActorSearchQuery;
