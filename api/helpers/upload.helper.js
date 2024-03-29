const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
let storage = multer.memoryStorage();

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("picture");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;