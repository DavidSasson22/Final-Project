const mongoose = require('mongoose');
const connection = "mongodb+srv://David_Sasson:2fNYIFHDBhvGiVhP@pee-or-not.nxlxl.mongodb.net/appDatabase?retryWrites=true&w=majority";
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
