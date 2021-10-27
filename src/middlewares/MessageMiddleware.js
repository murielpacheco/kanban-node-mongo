const { validat: isUuid } = require('uuid');
const Message = require('../models/Message');

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;
    try {
      const message = await Message.findById(id);
      response.message = message;
      if (!message) {
        return response.status(404).json({ error: 'Message not found' });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }

    next();
  },
};
