const multer = require('multer');
const upload = multer({
     limits : {fileSize : 100000}
}).single("profilePic");


module.exports = {upload}