const express = require('express');
const projectsRouter = require('./routers/projectRouter.js');
const actionRouter = require('./routers/actionRotuer.js');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger());

server.use('/api/project', projectsRouter);
server.use('/api/action', actionRouter);

server.get('/', (req, res)=>{
  console.log(`<h2>Node API Challenge</h2>`);
});

function logger(req, res, next) {
  console.log(`${req.method} request, ${req.url}`)
};

module.exports = server;