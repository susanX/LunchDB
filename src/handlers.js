const fs = require("fs");
const path = require("path");
const request = require("request");

// getData and postData
const postData = require("./handler/postData");
const getData = require("./handler/getData");

// output foods on GET
const getFoods = require("./handler/getFoods");

// home route
const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

// files
const handlePublic = (request, response, url) => {
  const filePath = path.join(__dirname, "..", "public", url);
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpg: "image/jpeg",
    png: "image/png"
  };
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("<h1>File not found</h1>");
    } else {
      response.writeHead(200, { "Content-Type": `${extType[ext]}` });
      response.end(file);
    }
  });
};

// _____________________________________________
// XMLHttpRequests - get data from database etc.

// output foods on page load - GET
const handleFoods = (request, response) => {
  getFoods((err, res) => {
    if (err) throw err;
    let output = JSON.stringify(res);

    console.log(output);

    response.writeHead(200, { "Content-Type": "application/JSON" });
    response.end(output);
  });
};

const handlePostData = (request, response) => {
  // standard form behaviour - data gets sent to a new webpage in html format

  // receive data from the form
  let allTheData = "";
  request.on("data", function(chunkOfData) {
    // text from form - outputs buffers
    allTheData += chunkOfData;
  });

  request.on("end", function() {
    // use form data
    const formData = allTheData.split(",");
    const person = formData[0];

    console.log(person);

    // post to db
    // - args will be: person, food, veg, paid
    postData(person, (err, res) => {
      if (err) console.log(err);

      // run AFTER postData is run - get latest item output to DOM
      getData((err, res) => {
        if (err) throw err;
        let output = JSON.stringify(res);
        response.writeHead(200, { "Content-Type": "application/JSON" });
        response.end(output);
      });
    });
  });
};

// export all of this
module.exports = {
  handleHomeRoute,
  handlePublic,
  handleFoods,
  handlePostData
};
