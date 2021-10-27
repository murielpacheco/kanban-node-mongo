const { response } = require('express');
const { v4: uuid } = require('uuid');
const { update } = require('../models/Message');
const Message = require('../models/Message');

module.exports = {
  async index(request, response) {
    try {
      const messages = await Message.find();
      return response.status(200).json({ messages });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },

  async store(request, response) {
    const { message } = request.body;

    if (!message) {
      return response.status(400).json({ error: 'Message is missing' });
    }

    const messages = new Message({
      _id: uuid(),
      message,
    });

    try {
      await messages.save();
      return response.status(201).json('Message added sucessfully!');
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async update(request, response) {
    const { message } = request.body;

    if (!message) {
      return response
        .status(400)
        .json({ error: 'Message content is necessary.' });
    }
    if (message) response.message.message = message;

    try {
      await response.message.save();
      return response
        .status(200)
        .json({ message: 'Message updated sucessfully!' });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },

  async delete(request, response) {
    try {
      await response.message.remove();
      return response
        .status(200)
        .json({ message: 'Message deleted sucessfully' });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
