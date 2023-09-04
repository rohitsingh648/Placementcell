
const mongoose = require('mongoose');


MongoURL = process.env.MONGO_URL;

mongoose.connect(MongoURL)
.then(()=>console.log('DB Connected Sucessfully'))
.catch((err)=>console.log(`Connetion Error in Mongodb ${err}`));


