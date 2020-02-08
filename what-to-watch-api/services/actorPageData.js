var request = require('request')
var actorPageDataServiceHandler = require('./serviceHandlers/ActorPageDataServiceHandler')

function fetchActorData(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        actorPageDataServiceHandler.setupHandler(body, resolve)
      } else {
        reject(err);
      }
    });
  });
}

return (module.exports = fetchActorData);
