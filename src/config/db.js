const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://pavan:pavan_123@cluster0.9byy8tf.mongodb.net/blogserver?retryWrites=true&w=majority"
  );
};
