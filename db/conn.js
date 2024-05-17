require('dotenv').config();
const mongoose = require('mongoose');

const db = process.env.MONGO_URI;
console.log('MongoDB URI:', db);

mongoose.connect(db)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));
