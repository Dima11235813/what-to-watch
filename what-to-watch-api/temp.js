const request = require("request");
var htmlparser = require("htmlparser");
// const CronJob = require('cron').CronJob;
// const nodemailer = require('nodemailer');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    const data = {
      img: [],
      div: []
    };
    const checkForChildren = bodyItem => {
      checkForImgAttributes(bodyItem);
      checkForDivData(bodyItem);
      if (bodyItem.children) {
        bodyItem.children.forEach(bodyItem => checkForChildren(bodyItem));
      }
    };
    const checkForImgAttributes = item => {
      if (item.name === "img") {
        let src = item.attribs && item.attribs.src ? item.attribs.src : "";
        data.img.push(src);
        // console.log(item.attribs.src);
        // if (
        //     item.attribs &&
        //     item.attribs.style &&
        //     item.attribs.style.indexOf("display:none") === -1 &&
        //     item.attribs.style.indexOf("visibility:hidden") === -1
        //     ) {
        //         console.log(item.attribs.style.indexOf("display:none"))
        // }
      }
    };
    const checkForDivData = () => {
      //TODO Implement storing of any h or p data
    };
    const returnData = dom => {
      dom.forEach(item => {
        if (item.children) {
          item.children.forEach(item => {
            if (item.children && item.name === "body") {
              item.children.forEach(bodyItem => {
                checkForChildren(bodyItem);
              });
            }
          });
        }
      });
      return data;
    };
    const handleResponse = body => {
      var handler = new htmlparser.DefaultHandler((error, dom) => {
        if (error) {
          console.log(`Pasing failure, error: ${error}`);
        } else {
          resolve(returnData(dom));
        }
      });
      var parser = new htmlparser.Parser(handler);
      return parser.parseComplete(body);
      // sys.puts(sys.inspect(handler.dom, false, null));
    };
    request(url, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        handleResponse(body);
      } else {
        reject(err);
      }
    });
  });
}

// lastReviewId = 0;

// async function startMonitoring(url) {
//     let data = [];

//     try {
//         let allReviews = await fetchData(url);
//         if (allReviews.length > 0) {
//             if (lastReviewId === 0) {
//                 lastReviewId = allReviews[0]['id'];
//             } else {
//                 for (const review of allReviews) {
//                     if(review['id'] === lastReviewId) {
//                         break;
//                     } else {
//                         newReviews.push(review);
//                     }
//                 }
//             }
//         }
//     } catch (err) {

//     }

//     if(newReviews.length > 0) {
//         return data
//         // sendNotification(newReviews);
//     }
//     console.log("We got " + newReviews.length + " new reviews.");
// }

// async function sendNotification(reviews) {

//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: '*****@gmail.com',
//         pass: '**Password**'
//       }
//     });

//     let textToSend = 'You got ' + reviews.length + ' new reviews';
//     let htmlText = ""

//     for (const review of reviews) {
//       htmlText += "<b>" + review.title + "</b>"
//       htmlText += "<p>" + review.comment + "</p>"
//     }

//     let info = await transporter.sendMail({
//       from: '"Reviews Notifier" <******@gmail.com>',
//       to: "*****@gmail.com",
//       subject: "New Reviews!",
//       text: textToSend,
//       html: htmlText
//     });

//     console.log("Message sent: %s", info.messageId);
// }

// let job = new CronJob('*/15 * * * * *', function() { //runs every 15 seconds in this config
//     startMonitoring();
//   }, null, true, null, null, true);
// job.start();

// var module = { exports: {fetchData} };
// var exports = module.exports;

// your code

return (module.exports = fetchData);
