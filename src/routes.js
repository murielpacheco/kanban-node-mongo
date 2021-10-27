const express = require('express');
const routes = express.Router();
const MessageController = require('./controllers/MessageController');
const MessageMiddleware = require('./middlewares/MessageMiddleware');

routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.store);
routes.put('/messages/:id',MessageMiddleware.validateId, MessageController.update);
routes.delete('/messages/:id',MessageMiddleware.validateId, MessageController.delete);

module.exports = routes;
