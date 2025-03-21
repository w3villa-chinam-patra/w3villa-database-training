const Customer = require("./models/customer");
const Order = require("./models/order");
const sequelize = require("./util/database");

Customer.hasMany(Order);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
