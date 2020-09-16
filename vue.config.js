const path = require("path");
function pathHandler(elemUrl) {
  return path.join(__dirname, elemUrl);
}
module.exports = {
    chainWebpack: (config) => {
    config.resolve.alias
      .set("@", pathHandler("./src"))
      .set("Api", pathHandler("./src/api"))
      .set("Assets", pathHandler("./src/assets"))
      .set("Comp", pathHandler("./src/components"))
      .set("Filter", pathHandler("./src/filter"))
      .set("Mixin", pathHandler("./src/mixin"))
      .set("Router", pathHandler("./src/router"))
      .set("Store", pathHandler("./src/store"))
      .set("Utils", pathHandler("./src/utils"))
      .set("Views", pathHandler("./src/views"));
  },
};
