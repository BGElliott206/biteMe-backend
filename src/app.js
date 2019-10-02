//What goes here?
const express = require ('express');

//Middleware?

//App level midleware libraries
const morgan = require ('morgan');
const cors = require ('cors');

//custom middleware?
const errorHandler;
const notFound;

//Routes?
const authRouter;

//Models?

const app = express();

app.use(cors());
app.use(morgan('dev'));

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 8080;
        app.listen(PORT, () =>)
    }
}

