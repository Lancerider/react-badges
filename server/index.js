const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path')

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Set up a domainList and check against it:
const domainList = ['https://react-badges-server.herokuapp.com*', 'https://react-badges.herokuapp.com']


const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

server.use(middlewares);

server.use(cors(corsOptions))
server.options('*', cors())

server.use(router);

server.listen(port);