const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dd2db3zk0",
    api_key : "859966739257757",
    api_secret : "zU9oi0pQhKP0HBvdfeYsJcoyMTI"
});

module.exports = cloudinary;