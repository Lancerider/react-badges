const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Set up a domainList and check against it:
const domainList = ['http://localhost*', 'https://react-badges-server.herokuapp.com', 'https://react-badges.herokuapp.com']

const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}


server.use(cors(corsOptions))

server.use(middlewares);
server.use(router);

server.listen(port);