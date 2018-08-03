var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');
var app = express();
var helmet = require('helmet');
var cors = require('cors');

import serverRoutes from "./middleware/routes";

// set up Hbs
app.set('views', path.join(process.cwd(), 'src/shared/views'));  
app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

// protect app from web vulnerabilities by setting HTTP headers appropriately
// Hide X-Powered-By
app.use(helmet.hidePoweredBy());

//cors setup -- add config later
app.use(cors());

//var publicApi = require('./api/public');
var router = express.Router();

app.use(router);

app.use(serverRoutes);

router.get('/test', function(req, res, next){
    setTimeout(function(){
        return res.status(200).send({data: 'This is a test API', error: null});
    }, 1000);
});

//var privateApi = require('./api/private/test');
//app.use('/api/private', privateApi);

export default app;