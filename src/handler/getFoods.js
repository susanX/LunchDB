// get foods on initial load

const dbConnection = require("../../database/db_connection.js");

// SELECT * FROM lunches
// SELECT lunch FROM lunches
const getFoods = cb => {
  dbConnection.query("SELECT lunch FROM lunches", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = getFoods;
