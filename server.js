const express = require('express');
const projectsRouter = require('./router/projectRouter.js');
const actionsRouter = require('./router/actionRouter.js');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
// server.use(logger());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res)=>{
  res.send(`<h2>Node API Challenge</h2>`);
});

// function logger(req, res, next) {
//   console.log('request');
//   next()
// };

module.exports = server;