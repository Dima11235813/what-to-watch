var htmlparser = require("htmlparser");

module.exports = (function() {
  let data;
  const resetData = () => {
    data = [];
    analytics = {
      countOfHiddenImages: 0
    };
  };
  setupHandler = (body, resolve) => {
    resetData();
    var handler = new htmlparser.DefaultHandler((error, dom) => {
      if (error) {
        console.log(`Pasing failure, error: ${error}`);
      } else {
        returnData(dom);
        resolve(data);
      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(body);
  };
  // sys.puts(sys.inspect(handler.dom, false, null));

  const checkForChildren = bodyItem => {
    let linkCheckResult = checkForLinkAttributes(bodyItem);
    if (linkCheckResult) {
      data.push(linkCheckResult);
    }
    if (bodyItem.children) {
      bodyItem.children.forEach(childBodyItem =>
        checkForChildren(childBodyItem)
      );
    }
  };
  const checkForLinkAttributes = item => {
    if (item.name === "a" && item.children) {
      const url = item.attribs.href;
      let src = "";
      item.children.forEach(item => {
        src = checkForImgAttributes(item);
      });
      if (src) {
        return {
          src: src,
          url: url
        };
      }
    } else {
      return false;
    }
  };
  const checkForImgAttributes = item => {
    if (item.name === "img") {
      let src = item.attribs && item.attribs.src ? item.attribs.src : "";

      if (item.attribs && item.attribs.style) {
        //only save visible images
        if (
          !item.attribs.style.indexOf("display:none") > -1 ||
          !Image.attribs.style.indexOf("visibility:hidden") > -1
        ) {
          //but count how many hidden images there are
          analytics.countOfHiddenImages += 1;
        }
      } else {
        return src;
      }
    }
  };
  const returnData = dom => {
    dom.forEach(item => {
      if (item.children) {
        //get open, head, body, close
        item.children.forEach(item => {
          if (item.children && item.name === "body") {
            //recursively iterate over body to get all links with images
            item.children.forEach(bodyItem => {
              checkForChildren(bodyItem);
            });
          }
        });
      }
    });
  };
  return {
    setupHandler
  };
})();
